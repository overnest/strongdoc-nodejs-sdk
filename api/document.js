const msg = require('../proto/document_pb');
const msgenc = require('../proto/documentNoStore_pb');
const promisify = require('../util/promisifyStream');
const misc = require('../util/misc');
const { Readable } = require('stream');
const util = require('util');

/**
 * UploadDocument uploads a document to Strongdoc-provided storage.
 * 
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!string} docName - The name of the document.
 * @param {!Buffer} plaintext - The text of the document.
 * @return {!UploadDocumentResponse} - The upload response.
 */
const uploadDocument = async (client, docName, plaintext) => {
    misc.checkClient(client, true);
    if (!(plaintext instanceof Buffer)) {
        throw "plaintext is not an instance of Buffer.";
    }

    let stream, resp;
    const authMeta = client.getAuthMeta();

    try {
        let resolveProm, rejectProm;
        promise = new Promise((resolve, reject) => {
            resolveProm = resolve;
            rejectProm = reject;
        });

        const cb = function(err, resp) {
            if (err) rejectProm(err);
            else resolveProm(resp);
        };

        stream = client.uploadDocumentStream(authMeta, cb);

        // Send the document name first
        const req = new msg.UploadDocStreamReq();
        req.setDocname(docName);
        stream.write(req);

        blockSize = 10000;
        // Send the plaintext in chunks
        for (i=0; i < plaintext.length; i += blockSize) {
            const req = new msg.UploadDocStreamReq();
            if (plaintext.length - i < blockSize) {
                req.setPlaintext(plaintext.slice(i));
            } else {
                req.setPlaintext(plaintext.slice(i, i+blockSize));
            }
            stream.write(req);
        }
        stream.end();
        resp = await promise;
    } catch (err) {
        throw err;
    } finally {
        if (stream != undefined) {
            stream.end();
        }
    }

    return (new UploadDocumentResponse(resp.getDocid(), resp.getBytes()));
};

/**
 * The response returned from the upload document API call.
 * @class UploadDocumentResponse
 * @hideconstructor
 */
class UploadDocumentResponse {
    /**
     * @constructs
     * @private
     * @param {!string} docID - The document ID for the uploaded document. 
     *                         This ID is needed to retrieve the document.
     * @param {!number} numBytes - The total number of bytes uploaded.
     */
    constructor(docID, numBytes) {
        this.docID = docID;
        this.numBytes = numBytes;
    }

    /**
     * Returns the document ID
     * @return {!string} The document ID
     */
    getDocID() {
        return this.docID;
    }

    /**
     * Returns number of bytes uploaded
     * @return {!number} The number of bytes uploaded
     */
    getNumBytes() {
        return this.numBytes;
    }
}

/**
 * UploadDocumentStream encrypts a document with Strongdoc and stores it in Strongdoc-provided storage.
 * It accepts a generator yielding the text of the document and the document name.
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!string} docName - The name of the document.
 * @param {!Buffer} dataStream - A generator yielding the text of the document.
 * @return {!UploadDocumentResponse} - The upload response.
 */
const uploadDocumentStream = async (client, docName, dataStream) => {
    misc.checkClient(client, true);

    let stream, resp;
    const authMeta = client.getAuthMeta();

    try {

        stream = client.uploadDocumentStreamAsync(authMeta);

        // Send the document name first
        const req = new msg.UploadDocStreamReq();
        req.setDocname(docName);
        stream.write(req);

        // Send the data
        for await (let chunk of dataStream) {
            if (!(chunk instanceof Buffer)) {
                throw "chunk is not an instance of Buffer.";
            }
            const req = new msg.UploadDocStreamReq();
            req.setPlaintext(chunk);
            stream.write(req);
        }

        resp = await stream.end();

    } catch (err) {
        stream.end()
        throw err;
    }

    return (new UploadDocumentResponse(resp.getDocid(), resp.getBytes()));
};

/**
 * DownloadDocument downloads a document stored in Strongdoc-provided storage.
 * 
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!string} docID - The ID of the document.
 * @return {!Buffer} - The downloaded document.
 */
const downloadDocument = async (client, docID) => {
    misc.checkClient(client, true);

    const authMeta = client.getAuthMeta();
    var plaintext = Buffer.alloc(0);

    const req = new msg.DownloadDocStreamReq();
    req.setDocid(docID);
    const stream = promisify.down(client.downloadDocumentStream(req, authMeta));

    try {
        while (true) {
            const resp = await stream.readAsync();
            if (resp === promisify.end) {
                break;
            }

            if (resp.getPlaintext() != "") {
                plaintext = Buffer.concat([plaintext, resp.getPlaintext()]);
            }
        }
    } catch (err) {
        throw err;
    } finally {
    }

    return plaintext;
};
/**
 * DownloadDocumentStream decrypts any document previously stored on Strongdoc-provided storage,
 * and makes the plaintext available via a Readable interface.
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!string} docID - The ID of the document.
 * @return {DownStream} - A Readable stream that yields data from the downloaded document.
 */
const downloadDocumentStream = (client, docID) => {
    misc.checkClient(client, true);

    const authMeta = client.getAuthMeta();

    const req = new msg.DownloadDocStreamReq();
    req.setDocid(docID);
    const grpcstream = promisify.down(client.downloadDocumentStream(req, authMeta));
    return new DownStream(docID, grpcstream)
};

/**
 * The response returned from the download document API call.
 * @class DownStream
 * @hideconstructor
 */
var DownStream = function(docID, grpcstream, options) {
    Readable.call(this, options); // pass through the options to the Readable constructor
    /**
     * @constructs
     * @private
     * @param {!string} grpcstream - A stream object which yields the downloaded document data.
     * @param {!Buffer} docID - The ID of the document.
     */
    this.grpcstream = grpcstream;
    this.docID = docID;
};

util.inherits(DownStream, Readable); // inherit the prototype methods

DownStream.prototype._read = async function() {
    let resp = await this.grpcstream.readAsync();
    if (resp === promisify.end) {
        this.push(null);
    } else if (resp.getPlaintext() !== '') {
        this.push(resp.getPlaintext());
    }
};

/**
 * Encrypts a document using the service, but does not store it. Instead
 * returns the encrypted ciphertext.
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!string} docName - The name of the document.
 * @param {!Buffer} plaintext - The text of the document.
 * @return {!EncryptDocumentResponse} - The encrypt document response.
 */
const encryptDocument = async (client, docName, plaintext) => {
    misc.checkClient(client, true);
    if (!(plaintext instanceof Buffer)) {
        throw "plaintext is not an instance of Buffer.";
    }

    const authMeta = client.getAuthMeta();
    const stream = promisify.bidirect(client.encryptDocumentStream(authMeta));
    var ciphertext = Buffer.alloc(0);
    var docID;

    try {
        // Send the document name first and get the document ID back.
        const req = new msgenc.EncryptDocStreamReq();
        req.setDocname(docName);
        const resp = await stream.writeAsync(req);
        docID = resp.getDocid();

        let blockSize = 10000;
        // Send the plaintext in chunks
        for (let i = 0; i < plaintext.length; i += blockSize) {
            const req = new msgenc.EncryptDocStreamReq();
            if (plaintext.length - i < blockSize) {
                req.setPlaintext(plaintext.slice(i));
            } else {
                req.setPlaintext(plaintext.slice(i, i+blockSize));
            }
            const resp = await stream.writeAsync(req);
            ciphertext = Buffer.concat([ciphertext, resp.getCiphertext()]);
        }
    } catch (err) {
        throw err;
    } finally {
        stream.end();
    }

    return (new EncryptDocumentResponse(docID, ciphertext));
};

/**
 * The response returned from the encrypt document API call.
 * @class EncryptDocumentResponse
 * @hideconstructor
 */
class EncryptDocumentResponse {
    /**
     * @constructs
     * @private
     * @param {!string} docID - The document ID for the uploaded document. 
     *                         This ID is needed to decrypt the document.
     * @param {!Buffer} ciphertext - The encrypted ciphertext of the document.
     */
    constructor(docID, ciphertext) {
        this.docID = docID;
        this.ciphertext = ciphertext;
    }

    /**
     * Returns the document ID
     * @return {!string} The document ID
     */
    getDocID() {
        return this.docID;
    }

    /**
     * Returns the encrypted ciphertext of the document
     * @return {!Buffer} The encrypted ciphertext of the document
     */
    getCiphertext() {
        return this.ciphertext;
    }
}

/**
 * EncryptDocumentStream encrypts a document with Strongdoc and makes the encrypted ciphertext available via an
 * Readable interface. It accepts an generator yielding the plaintext and the document name.
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!string} docName - The name of the document.
 * @param {!Buffer} plaintextStream - A generator yielding the text of the document.
 * @return {!EncryptDocumentResponse} - The encrypt document response,
 * contains the docId and the generator yielding the ciphertext.
 */
const encryptDocumentStream = async (client, docName, plaintextStream) => {
    misc.checkClient(client, true);

    const authMeta = client.getAuthMeta();
    const stream = promisify.bidirect(client.encryptDocumentStream(authMeta));
    var docID;

    try {
        // Send the document name first and get the document ID back.
        const req = new msgenc.EncryptDocStreamReq();
        req.setDocname(docName);
        const resp = await stream.writeAsync(req);
        docID = resp.getDocid();


        async function* encryptStream(dataStream) {
            
            for await (let chunk of dataStream) {
                const req = new msgenc.EncryptDocStreamReq();
                req.setPlaintext(chunk);
                const resp = await stream.writeAsync(req);
                yield resp.getCiphertext();
            }
            stream.end()
        }
        return new EncryptStreamResponse(docID, Readable.from(encryptStream(plaintextStream)));
    } catch (err) {
        throw err;
    }
};

/**
 * The response returned from the EncryptStream API call.
 * @class EncryptStreamResponse
 * @hideconstructor
 */
class EncryptStreamResponse {
    constructor(docID, encryptStream) {
        this.encryptStream = encryptStream;
        this.docID = docID;
    }
}


/**
 * Decrypt a document using the service. The user must provide the ciphertext
 * returned during the encryptDocument API call.
 * 
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!string} docID - The ID of the document.
 * @param {!Buffer} ciphertext - The document ciphertext to be decrypted.
 * @return {!Buffer} - The decrypted plaintext content of the document.
 */
const decryptDocument = async (client, docID, ciphertext) => {
    misc.checkClient(client, true);
    if (!(ciphertext instanceof Buffer)) {
        throw "ciphertext is not an instance of Buffer.";
    }

    const authMeta = client.getAuthMeta();
    const stream = promisify.bidirect(client.decryptDocumentStream(authMeta));
    var plaintext = Buffer.alloc(0);

    try {
        // Send the document ID first.
        const req = new msgenc.DecryptDocStreamReq();
        req.setDocid(docID);
        const resp = await stream.writeAsync(req);
        respDocID = resp.getDocid();
        if (docID !== respDocID) {
            throw Error("Requested docID " + docID + " but received " + respDocID);
        }

        blockSize = 10000;
        // Send the ciphertext in chunks
        for (i=0; i < ciphertext.length; i += blockSize) {
            const req = new msgenc.DecryptDocStreamReq();
            if (ciphertext.length - i < blockSize) {
                req.setCiphertext(ciphertext.slice(i));
            } else {
                req.setCiphertext(ciphertext.slice(i, i+blockSize));
            }
            const resp = await stream.writeAsync(req);
            if (resp.getPlaintext() !== "") {
                plaintext = Buffer.concat([plaintext, resp.getPlaintext()]);
            }
        }
    } catch (err) {
        throw err;
    } finally {
        stream.end();
    }

    return plaintext;
};

/**
 * Decrypts any document previously stored on Strongdoc-provided storage, and makes
 * the plaintext available via an generator interface.
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!string} docID - The ID of the document.
 * @param {!Readable} cipherStream - A generator yielding the document ciphertext to be decrypted.
 * @return {!Readable} - A generator yielding the decrypted plaintext content of the document.
 */
const decryptDocumentStream = async (client, docID, cipherStream) => {
    misc.checkClient(client, true);

    const authMeta = client.getAuthMeta();
    const stream = promisify.bidirect(client.decryptDocumentStream(authMeta));

    try {
        // Send the document name first and get the document ID back.
        const req = new msgenc.DecryptDocStreamReq();
        req.setDocid(docID);
        const resp = await stream.writeAsync(req);

        async function* decryptStream(dataStream) {
            for await (let chunk of dataStream) {
                const req = new msgenc.DecryptDocStreamReq();
                req.setCiphertext(chunk);
                const resp = await stream.writeAsync(req);
                yield resp.getPlaintext(); 
            }
            stream.end()
        }
        return Readable.from(decryptStream(cipherStream));
    } catch (err) {
        throw err;
    }
};

/**
 * Shares a document with another user.
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!string} docID - The ID of the document.
 * @param {!string} userID - The ID of the user.
 * @return {!boolean} - The success message.
 */
const shareDocument = async (client, docID, userID) => {
    misc.checkClient(client, true);
    const authMeta = client.getAuthMeta();
    const req = new msg.ShareDocumentRequest();
    req.setDocid(docID);
    req.setUserid(userID);
    result = await client.shareDocumentSync(req, authMeta);
    resp = new msg.ShareDocumentResponse(result.array);
    return resp.getSuccess();
};

/**
 * Unshares a document with another user.
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!string} docID - The ID of the document.
 * @param {!string} userID - The ID of the user.
 * @return {!number} count - The number of documents unshared.
 */
const unshareDocument = async (client, docID, userID) => {
    misc.checkClient(client, true);
    const authMeta = client.getAuthMeta();
    const req = new msg.UnshareDocumentRequest();
    req.setDocid(docID);
    req.setUserid(userID);
    result = await client.unshareDocumentSync(req, authMeta);
    resp = new msg.UnshareDocumentResponse(result.array);
    return resp.getCount();
};

/**
 * listDocuments returns a slice of Document objects, representing the documents accessible by the user.
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @return {!ListDocumentsResp} - The listDocuments response.
 */
const listDocuments = async (client) => {
    misc.checkClient(client, true);
    const authMeta = client.getAuthMeta();
    const req = new msg.ListDocumentsRequest();
    result = await client.listDocumentsSync(req, authMeta);
    resp = new msg.ListDocumentsResponse(result.array);
    return (new ListDocumentsResp(resp));
};

/**
 * The response returned from the search API call.
 * @class ListDocumentsResp
 * @hideconstructor
 */
class ListDocumentsResp {
    get documentsList() {
        return this._documentsList;
    }
    /**
     * @constructs
     * @private
     * @param {!msg.ListDocumentsResp} resp - The ListDocuments response.
     */
    constructor(resp) {
        this._documentsList = resp.getDocumentsList().map(doc =>
            new DocumentResult(doc.getDocid(), doc.getDocname(), doc.getSize()));
    }
}

/**
 * The document that matches the search result.
 * @class DocumentResult
 * @hideconstructor
 */
class DocumentResult {
    get docID() {
        return this._docID;
    }

    get docName() {
        return this._docName;
    }

    get size() {
        return this._size;
    }

    /**
     * @constructs
     * @private
     * @param {string} docID - The matching document ID.
     * @param {string} docName - The docName of the matching document.
     * * @param {string} size - The size of the matching document.
     */
    constructor(docID, docName, size) {
        this._docName = docName;
        this._size = size;
        this._docID = docID;
    }
    /**
     * @constructs
     * @public
     */
    toString() {
        const div = "\n";
        return this._docID + div + this._docName + div + this.docID
    }
}

/**
 * removeDocument removes a document from Strongdoc-provided storage.
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!string} docID - The ID of the document.
 * @return {!boolean} - The status of the request.
 */
const removeDocument = async (client, docID) => {
    misc.checkClient(client, true);
    const authMeta = client.getAuthMeta();
    const req = new msg.RemoveDocumentRequest();
    req.setDocid(docID);
    result = await client.removeDocumentSync(req, authMeta);
    resp = new msg.RemoveDocumentResponse(result.array);
    return resp.getStatus();
};


exports.uploadDocument = uploadDocument;
exports.downloadDocument = downloadDocument;
exports.encryptDocument = encryptDocument;
exports.decryptDocument = decryptDocument;
exports.listDocuments = listDocuments;
exports.shareDocument = shareDocument;
exports.unshareDocument = unshareDocument;
exports.downloadDocumentStream = downloadDocumentStream;
exports.uploadDocumentStream = uploadDocumentStream;
exports.removeDocument = removeDocument;
exports.encryptDocumentStream = encryptDocumentStream;
exports.decryptDocumentStream = decryptDocumentStream;