const fs = require('fs');
const path = require('path');
const grpc = require('grpc');
const service = require('./proto/strongdoc_grpc_pb');
const login = require('./api/login');
const accounts = require('./api/accounts');
const document = require('./api/document');
//const billing = require('./api/billing');
const search = require('./api/search');
const sd = require('./client/strongDoc');

const rand = Math.floor(Math.random() * 100)

const adminName     = "adminUserName" + rand,
      adminPassword = "adminUserPassword" + rand,
      adminEmail    = `adminUserName${rand}@somewhere.com`;

const adminName2 = "admin2", adminPassword2 = "adminPassword2", adminEmail2 = "admin2@somewhere.com";

const userName     = "userUserName" + rand,
      userPassword = "userUserPassword" + rand,
      userEmail    = `userUserName${rand}@somewhere.com`;

const organization  = "OrganizationOne" + rand;
const organization2 = "OrganizationTwo";

const testSource = "Test";
const testSourceData = "{\"registrationToken\": \"node1\"}", testSourceData2 = "{\"registrationToken\": \"org2\"}"

async function main() {
    const filepath = path.join(__dirname,
        './testdocs/BedMounts.pdf');
    const plaintext = fs.readFileSync(filepath);
    var client;

    try {
        client = new sd.StrongDoc(sd.StrongDoc.ServciceLocation.LOCAL);
        
        console.log('client')
        resp = await accounts.registerOrganization(client, organization, "",
            adminName, adminPassword, adminEmail, testSource, testSourceData);
        console.log('register org. orgID: ', resp.getOrgID(), 'userID: ', resp.getUserID())
        orgId = resp.getOrgID();
        userId = resp.getUserID();

        //
        await accounts.registerOrganization(client, organization2, "",
            adminName2, adminPassword2, adminEmail2, testSource, testSourceData2);


        var token = await login.login(client, adminEmail, adminPassword, organization);
        console.log('token: ', token.substring(0, 20), '...');

        let docName = "BedMounts.pdf";
        resp = await document.uploadDocument(client, docName, plaintext);
        let upDocId = resp.getDocID();
        console.log('uploadDocument. docID: ', upDocId);

        let readStream = fs.createReadStream(filepath);
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

        return

        // resp = await document.encryptDocument(client, docName, plaintext);
        // encDocId = resp.getDocID();
        // encCiphertext = resp.getCiphertext();

        // let encryptStreamRes = await document.encryptDocumentStream(client, docName, readStream);
        // let encCiphertext = Buffer.alloc(0);
        // console.log("starting iteration")
        // for await (let chunk of encryptStreamRes.encryptStream) {
        //     console.log("chunklen: " + chunk.length.toString());
        //     encCiphertext = Buffer.concat([encCiphertext, chunk])
        // }
        // console.log('encCiphertext len = ' + encCiphertext.length.toString());
        // // decPlaintext = await document.decryptDocument(client, encryptStreamRes.docID, encCiphertext);
        // let decryptStream = await document.decryptDocumentStream(client, encryptStreamRes.docID, encryptStreamRes.encryptStream);
        //
        // decPlaintext = Buffer.alloc(0);
        // for await (let chunk of decryptStream) {
        //     console.log("chunklen: " + chunk.length.toString());
        //     decPlaintext = Buffer.concat([decPlaintext, chunk])
        // }
        // if (Buffer.compare(plaintext, decPlaintext) != 0) {
        //     console.log("The decrypted text does not match original plaintext")
        // }
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
            console.log(user.toString());
        });
        // shareResult = await document.shareDocument(client, docID, userID);

        docsResp = await document.listDocuments(client);
        docsList = docsResp.documentsList;
        docsList.forEach((doc => {
            //console.log(doc.toString())
        }));

        for (d in docsList) {
            console.log(d.docName)
        }

        resp = await search.search(client, token, "bed mounts");
        resp.getHitsList().forEach(hit => {
            console.log(hit.toString());
        });
        resp.getHitsList().forEach(function(hit){
            if (hit.getDocID() != upDocId && hit.getDocID() != encDocId) {
                throw Error("The search result does not match.")
            }
        });

        // let removeDocRes = await document.removeDocument(client, upDocId);
        // console.log("removeDocRes: " + removeDocRes);

        // let status = await login.logout(client, token);
        // console.log(status);
        // console.log("Done!")

    } catch (e) {
        console.log("Error Thrown ", e);
    } finally {
        if (token != undefined) {
            try {
                success = await accounts.removeOrganization(client, true);
                console.log("OrganizationOne remove: ", success);
            } catch(e) {
                console.log("Error Thrown For removeOrganization", e);
            }
        }

    }

    if (client != undefined) {
        client.close();
    }
}

if (require.main === module) {
    main();
}
