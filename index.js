const fs = require('fs');
const path = require('path');
const grpc = require('grpc');
const service = require('./proto/strongdoc_grpc_pb');
const login = require('./api/login');
const config = require('./api/config')
const accounts = require('./api/accounts');
const document = require('./api/document');
const search = require('./api/search');
const sd = require('./client/strongDoc');


const adminName     = "adminUserName"
const adminPassword = "adminUserPassword"
const adminEmail    = "adminUser@somewhere.com"

const userName     = "userUserName"
const userPassword = "userUserPassword"
const userEmail    = "userUser@somewhere.com"
const organization  = "OrganizationOne"

async function main() {
    const plaintext = fs.readFileSync(path.join(__dirname, 
        './testdocs/BedMounts.pdf'));
    var client;

    try {
        client = new sd.StrongDoc(sd.StrongDoc.ServciceLocation.LOCAL);
        // resp = await accounts.registerOrganization(client, organization, "",
        //     adminName, adminPassword, adminEmail);
        // orgId = resp.getOrgID();
        // userId = resp.getUserID();
        orgId = organization;
        userId = adminEmail;
        var token = await login.login(client, adminEmail, adminPassword, organization);

        let configStatus = await config.getConfiguration(client)
        console.log(configStatus)

        resp = await document.uploadDocument(client, "BedMounts.pdf", plaintext);
        upDocId = resp.getDocID();

        downPlaintext = await document.downloadDocument(client, upDocId);
        if (Buffer.compare(plaintext, downPlaintext) != 0) {
            throw Error("The downloaded text does not match original plaintext")
        }

        resp = await document.encryptDocument(client, "BedMounts.pdf", plaintext);
        encDocId = resp.getDocID();
        encCiphertext = resp.getCiphertext();

        decPlaintext = await document.decryptDocument(client, encDocId, encCiphertext);
        if (Buffer.compare(plaintext, decPlaintext) != 0) {
            throw Error("The decrypted text does not match original plaintext")
        }

        // let userID = await accounts.registerUser(client, userName, userPassword, userEmail, false);
        // console.log("userID: " + userID);

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

        const users = await accounts.listUsers(client);
        users.forEach(user => {
            console.log(user.toString());
        });
        // shareResult = await document.shareDocument(client, docID, userID);

        // docsResp = await document.listDocuments(client)
        // docsList = docsResp.documentsList
        // docsList.forEach((doc => {
        //     console.log(doc.toString())
        // }));

        // for (d in docs) {
        //     console.log(d.docName)
        // }

        resp = await search.search(client, token, "bed mounts");
        resp.getHitsList().forEach(function(hit){
            if (hit.getDocID() != upDocId && hit.getDocID() != encDocId) {
                throw Error("The search result does not match.")
            }          
        });
        let status = await login.logout(client, token);
        console.log(status);
        console.log("Done!")

    } catch (e) {
        console.log("Error Thrown ", e);
    } finally {
        // if (token != undefined) {
        //     try {
        //         success = await accounts.removeOrganization(client, true);
        //         console.log("Organization remove: ", success);
        //     } catch(e) {
        //         console.log("Error Thrown For removeOrganization", e);
        //     }
        // }
    }

    if (client != undefined) {
        client.close();
    }
}

if (require.main === module) {
    main();
}
