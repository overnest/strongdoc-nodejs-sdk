const msg = require('../proto/document_pb');
const msgenc = require('../proto/documentNoStore_pb');
const promisify = require('../util/promisifyStream');
const misc = require('../util/misc');

/**
 * Uploads a document to the service for storage.
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

    var stream, resp;
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
        }

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
}

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
 * Download a document from the service.
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
}

/**
 * Encrypts a document using the service, but do not store it. Instead 
 * return the encrypted ciphertext.
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

        blockSize = 10000;
        // Send the plaintext in chunks
        for (i=0; i < plaintext.length; i += blockSize) {
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
}

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
        if (docID != respDocID) {
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
            if (resp.getPlaintext() != "") {
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

const listDocuments = async (client) => {
    misc.checkClient(client, true);
    const authMeta = client.getAuthMeta();
    const req = new msg.ListDocumentsRequest();
    result = await client.listDocumentsSync(req, authMeta);
    resp = new msg.ListDocumentsResponse(result.array);
    return (new ListDocumentsResp(resp));
};

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
        const div = "\n"
        return this._docID + div + this._docName + div + this.docID
    }
}


exports.uploadDocument = uploadDocument;
exports.downloadDocument = downloadDocument;
exports.encryptDocument = encryptDocument;
exports.decryptDocument = decryptDocument;
exports.listDocuments = listDocuments;
exports.shareDocument = shareDocument;
exports.unshareDocument = unshareDocument;
