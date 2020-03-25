
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const stream = require('stream');
const bluebird = require('bluebird');

const { admin1, admin2, user1, org1, org2} = require('./testdocs/userData');
const {StrongDoc, auth, accounts, document, billing, search} = require('../index')
const pipeline = bluebird.promisify(stream.pipeline);
const filepath = path.join(__dirname,'./testdocs/BedMounts.pdf');
const encryptedFilepath = path.join(__dirname,'./testdocs/encrypted_doc');
const SERVER = StrongDoc.ServciceLocation.LOCAL;
var client, token;

before(async function() {
  client = new StrongDoc(SERVER);
  await accounts.registerOrganization(client, org1.name, "", 
    admin1.name, admin1.password, admin1.email, org1.source, org1.sourceData);

  await accounts.registerOrganization(client, org2.name, "", 
  admin2.name, admin2.password, admin2.email, org2.source, org2.sourceData);
})


describe('Login', function() {
  it('should return a JWT', async function() {
    token = await auth.login(client, admin1.email, admin1.password, org1.name);
    assert.equal(typeof token === 'string' && token.length > 0, true);
  });
});

describe('Document', function(){
  let uploadDocId, uploadStreamDocId

  describe('uploadDocument', function() {
    it('shoudl return docId', async function() {
      const data = fs.readFileSync(filepath);
      const resp = await document.uploadDocument(client, 'bedmounts.pdf', data);
      uploadDocId = resp.getDocID()
      assert.equal(typeof uploadDocId, 'string')
      assert.equal(uploadDocId.length > 0, true)
    })
  })

  describe('uploadDocumentStream', function() {
    it('should return docId', async function() {
      const readStream = fs.createReadStream(filepath);
      const resp = await document.uploadDocumentStream(client, 'bedmounts stream.pdf', readStream);
      uploadStreamDocId = resp.getDocID();
      assert.equal(typeof uploadStreamDocId, 'string')
      assert.equal(uploadStreamDocId.length > 0, true)
    })
  })

  describe('downloadDocuemnt', function() {
    it('returned data should match original data', async function() {
      const originalData = fs.readFileSync(filepath);
      const data = await document.downloadDocument(client, uploadDocId);
      assert.equal(Buffer.compare(originalData, data), 0)
    })
  })

  describe('downloadDocuemntStream', function() {
    it('returned data should match original data', async function() {
      const originalData = fs.readFileSync(filepath);
      const downStream = document.downloadDocumentStream(client, uploadStreamDocId);

      let data = Buffer.alloc(0);
      for await (const chunk of downStream) {
          data = Buffer.concat([data, chunk])
      }

      assert.equal(Buffer.compare(originalData, data), 0)
    })
  })

  describe('removeDocument', function() {
    it('should return successfully', async function() {
      const removeDocRes = await document.removeDocument(client, uploadStreamDocId);
      assert.equal(removeDocRes, true)
    })
  })

  describe('encrypt and decrypt', function() {
    it('decrypted data should match the original', async function() {
      const originalData = fs.readFileSync(filepath);

      const resp = await document.encryptDocument(client, 'bed mounts for encryption.pdf', originalData);
      const encDocId = resp.getDocID();
      
      assert.equal(encDocId.length > 0, true)

      const ciphertext = resp.getCiphertext();
      const data = await document.decryptDocument(client, encDocId, ciphertext);

      assert.equal(Buffer.compare(originalData, data), 0)
    })
  })

  describe('encrypt and decrypt stream', function() {
    it('decrypted data should match the original', async function() {
      const fileStream = fs.createReadStream(filepath);
      const resp = await document.encryptDocumentStream(client, 'encrypt stream.pdf', fileStream);
      const writable = fs.createWriteStream(encryptedFilepath);
      await pipeline(resp.encryptStream, writable);

      const encryptedReadable = fs.createReadStream(encryptedFilepath);
      const decryptStream = await document.decryptDocumentStream(client, resp.docID, encryptedReadable);
      
      let data = Buffer.alloc(0);
      for await (let chunk of decryptStream) {
          data = Buffer.concat([data, chunk])
      }

      const originalData = fs.readFileSync(filepath);
      assert.equal(Buffer.compare(originalData, data), 0)
    })
  })

})

describe('Accounts', function(){
  describe('Account actions', function() {
    it('should complete account actions', async function() {
        const userID = await accounts.registerUser(client, user1.name, user1.password, user1.email, false);
        assert.equal(userID.length > 0, true);

        const addSharableOrgRes = await accounts.addSharableOrg(client, org2.name);
        assert.equal(addSharableOrgRes, true);

        const setMultiLevelSharingRes = await accounts.setMultiLevelSharing(client, true);
        assert.equal(setMultiLevelSharingRes, true);

        const removeSharableOrgRes = await accounts.removeSharableOrg(client, org2.name);
        assert.equal(removeSharableOrgRes, true);

        const data = fs.readFileSync(filepath);
        const resp = await document.uploadDocument(client, 'docforsharing.pdf', data);
        const uploadDocId = resp.getDocID()

        const shareDocumentRes = await document.shareDocument(client, uploadDocId, user1.email);
        assert.equal(shareDocumentRes, true);

        const unshareDocumentRes = await document.unshareDocument(client, uploadDocId, user1.email);
        assert.equal(unshareDocumentRes, true);

        // todo: change userEmail back to userID
        const promoteUserRes = await accounts.promoteUser(client, user1.email);
        assert.equal(promoteUserRes, 1);

        const demoteUserRes = await accounts.demoteUser(client, user1.email);
        assert.equal(demoteUserRes, 1);

        const removeUserRes = await accounts.removeUser(client, user1.email);
        assert.equal(removeUserRes, 1)

        const users = await accounts.listUsers(client);
        assert.equal(users.length > 0, true)

        const docsResp = await document.listDocuments(client);
        assert.equal(docsResp.documentsList.length > 0, true)
    })
  })
})

describe('Search', function() {
  it('should return search results', async function() {
    const results = await search.search(client, "bed mounts");
    assert.equal(results.getHitsList().length > 0, true);
  });
});

describe.skip('Billing', function() {
  it('should return billing details', async function() {
    const results = await billing.getBillingDetails(client);
    assert.equal(1,1)
  });
});

describe('Logout', function() {
  it('should return logout status', async function() {
    let status = await auth.logout(client, token);
    assert.equal(status.includes('You have successfully logged out'), true);
  });
});



after(async function() {
  console.log('Done. removing accounts and test data');

  await wait(1100);

  try {
    client = new StrongDoc(SERVER);
    await auth.login(client, admin1.email, admin1.password, org1.name);
    const success = await accounts.removeOrganization(client, true);
    console.log('removed org1: ', success)
  } catch(err) {
    console.log('could not remove org1: ', err)
  }

  try{
    client = new StrongDoc(SERVER);
    await auth.login(client, admin2.email, admin2.password, org2.name);
    const success2 = await accounts.removeOrganization(client, true);
    console.log('removed org2:', success2);
  } catch(err) {
    console.log('could not remove org2: ', err)
  }
})

const wait = milSec => new Promise(resolve => setTimeout(() => resolve(), milSec))