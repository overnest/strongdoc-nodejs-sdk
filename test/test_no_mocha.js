const fs = require('fs');
const path = require('path');

const {StrongDoc, auth, accounts, document, billing, search} = require('../index')

const stream = require('stream');
const bluebird = require('bluebird');
const pipeline = bluebird.promisify(stream.pipeline);

const rand = Math.floor(Math.random() * 1000)

const adminName     = "adminUserName" + rand,
      adminPassword = "adminUserPassword" + rand,
      adminEmail    = `adminUserName${rand}@somewhere.com`;

const adminName2 = "admin2", adminPassword2 = "adminPassword2", adminEmail2 = "admin2@somewhere.com";

const userName     = "userUserName" + rand,
      userPassword = "userUserPassword" + rand,
      userEmail    = `userUserName${rand}@somewhere.com`;

const organization  = "OrganizationOne" + rand;
const organization2 = "OrganizationTwo";

const testSource = "Test Active";
const testSourceData = "{\"registrationToken\": \"node1\"}", testSourceData2 = "{\"registrationToken\": \"org2\"}"

async function main() {
    const filepath = path.join(__dirname,
        './testdocs/BedMounts.pdf');
    const plaintext = fs.readFileSync(filepath);
    var client;

    try {
        console.log(StrongDoc)
        client = new StrongDoc(StrongDoc.ServciceLocation.LOCAL);
        
        console.log('client')
        resp = await accounts.registerOrganization(client, organization, "",
            adminName, adminPassword, adminEmail, testSource, testSourceData);
        console.log('register org. orgID: ', resp.getOrgID(), 'userID: ', resp.getUserID())
        orgId = resp.getOrgID();
        userId = resp.getUserID();

        //
        await registerSecondOrganization(client)


        var token = await auth.login(client, adminEmail, adminPassword, organization);
        console.log('token: ', token.substring(0, 20), '...');

        let docName = "BedMounts.pdf";
        resp = await document.uploadDocument(client, docName, plaintext);
        let upDocId = resp.getDocID();
        console.log('uploadDocument. docID: ', upDocId);

        const readStream = fs.createReadStream(filepath);
        res = await document.uploadDocumentStream(client, docName, readStream);
        console.log("uploadDocumentStream: " + res.getDocID());


        let downStream = document.downloadDocumentStream(client, upDocId);
        let downStrmPlaintext = Buffer.alloc(0);
        for await (let chunk of downStream) {
            downStrmPlaintext = Buffer.concat([downStrmPlaintext, chunk])
        }
        if (Buffer.compare(plaintext, downStrmPlaintext) != 0) {
            throw Error("The downloaded text does not match original plaintext")
        }

        let downPlaintext = await document.downloadDocument(client, upDocId);

        console.log(plaintext.length);
        console.log(downPlaintext.length);
        if (Buffer.compare(plaintext, downPlaintext) != 0) {
            console.log("The downloaded text does not match original plaintext")
        }

        
        //ENCRYPT AND DECRYPT DOCUMENT
        resp = await document.encryptDocument(client, docName, plaintext);
        encDocId = resp.getDocID();
        console.log('encrypted docID: ', encDocId)
        let encCiphertext = resp.getCiphertext();
        let decPlaintext = await document.decryptDocument(client, encDocId, encCiphertext);
        if (Buffer.compare(plaintext, decPlaintext) != 0) {
            console.log("ERROR!!!!!!    The decrypted text does not match original plaintext")
        }
        //END

        const fileStreamForEncrypt = fs.createReadStream(filepath);
        let encryptStreamRes = await document.encryptDocumentStream(client, docName, fileStreamForEncrypt);
        // let encStrmCiphertext = Buffer.alloc(0);
        // for await (let chunk of encryptStreamRes.encryptStream) {
        //     console.log("chunklen: " + chunk.length.toString());
        //     encStrmCiphertext = Buffer.concat([encStrmCiphertext, chunk])
        // }
        // console.log('encStrmCiphertext len = ' + encStrmCiphertext.length);
        
        // let decStrmPlaintext = await document.decryptDocument(client, encryptStreamRes.docID, encStrmCiphertext);
        // if (Buffer.compare(plaintext, decStrmPlaintext) != 0) {
        //     console.log("ERROR!!!!!!    The decrypted text does not match original plaintext")
        // } else {
        //     console.log('success')
        // }
        const writable = fs.createWriteStream('./testdocs/encrypted_doc');
        await pipeline(encryptStreamRes.encryptStream, writable);
        const encryptedReadable = fs.createReadStream('./testdocs/encrypted_doc');

        let decryptStream = await document.decryptDocumentStream(client, encryptStreamRes.docID, encryptedReadable);
        
        let decStrmPlaintext = Buffer.alloc(0);
        for await (let chunk of decryptStream) {
            console.log("chunklen: " + chunk.length.toString());
            decStrmPlaintext = Buffer.concat([decStrmPlaintext, chunk])
        }
        if (Buffer.compare(plaintext, decStrmPlaintext) != 0) {
            console.log("ERROR!!!!!!    The decrypted streamed text does not match original plaintext")
        } else {
            console.log('success')
        }


        
        let userID = await accounts.registerUser(client, userName, userPassword, userEmail, false);
        console.log("userID: " + userID);

        let addSharableOrgRes = await accounts.addSharableOrg(client, organization2);
        console.log("addSharableOrgRes: " + addSharableOrgRes);
        let setMultiLevelSharingRes = await accounts.setMultiLevelSharing(client, true);
        console.log("setMultiLevelSharingRes: " + setMultiLevelSharingRes);
        let removeSharableOrgRes = await accounts.removeSharableOrg(client, organization2);
        console.log("removeSharableOrgRes: " + removeSharableOrgRes);

        let shareDocumentRes = await document.shareDocument(client, upDocId, userEmail);
        console.log("shareDocument: " + shareDocumentRes);
        let unshareDocumentRes = await document.unshareDocument(client, upDocId, userEmail);
        console.log("unshareDocument: " + unshareDocumentRes);

        // todo: change userEmail back to userID
        let promoteUserRes = await accounts.promoteUser(client, userEmail);
        console.log("promoteUser: " + promoteUserRes);
        let demoteUserRes = await accounts.demoteUser(client, userEmail);
        console.log("demoteUser: " + demoteUserRes);
        let removeUserRes = await accounts.removeUser(client, userEmail);
        console.log("removeUserRes: " + removeUserRes);
        // let billingDetailsRes = await billing.getBillingDetails(client);
        // console.log("billingDetailsRes: " + billingDetailsRes.totalCost);

        const users = await accounts.listUsers(client);
        users.forEach(user => {
            console.log('user:', user);
        });
        // shareResult = await document.shareDocument(client, docID, userID);

        const docsResp = await document.listDocuments(client);
        docsResp.documentsList.forEach((doc => {
            console.log('doc: ', doc)
        }));

        resp = await search.search(client, "bed mounts");
        resp.getHitsList().forEach(hit => {
            console.log('search result hit: ', hit);
        });
        

        let removeDocRes = await document.removeDocument(client, upDocId);
        console.log("removeDocRes: " + removeDocRes);
        console.log("Done!")

        let status = await auth.logout(client, token);
        console.log("logout status: ", status);
        console.log('waiting 2 seconds');
        await wait(2);
        var client2 = new StrongDoc(StrongDoc.ServciceLocation.LOCAL);
        var token2 = await auth.login(client2, adminEmail, adminPassword, organization);
        console.log('logged in for account deletion')


    } catch (e) {
        console.log("Error Thrown ", e);
    } finally {
        if (token2 != undefined) {
            try {
                success = await accounts.removeOrganization(client2, true);
                console.log("test org OrganizationOne removed: ", success);
                
            } catch(e) {
                console.log("Error Thrown For test cleanup", e);
            }
        }

    }

    if (client != undefined) {
        client.close();
    }
}

async function registerSecondOrganization (client) {
    try {
        await accounts.registerOrganization(client, organization2, "",
            adminName2, adminPassword2, adminEmail2, testSource, testSourceData2);
    }catch(err) {
       if (err.message.includes('6 ALREADY_EXISTS')) console.log('Org 2 already exists. Continuing tests')
       else throw err
    }
}

const wait = seconds => new Promise((resolve) => {
    setTimeout(() => resolve(), seconds * 1000)
})

if (require.main === module) {
    main();
}
