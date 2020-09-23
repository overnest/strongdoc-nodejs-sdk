
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const stream = require('stream');
const bluebird = require('bluebird');
const sa = require('superagent');

const { admin1, admin2, user1, org1, org2} = require('./testdocs/userData');
const {StrongDoc, auth, accounts, document, billing, search} = require('../index')
const pipeline = bluebird.promisify(stream.pipeline);
const filepath = path.join(__dirname,'./testdocs/BedMounts.pdf');
const encryptedFilepath = path.join(__dirname,'./testdocs/encrypted_doc');
const SERVER = StrongDoc.ServciceLocation.LOCAL;
var client, token;

before(async function() {
  client = new StrongDoc(SERVER);

  // try {
  //   await createTestOrgs()
  //   return
  // } catch(err) {
  //   console.log('error creating test orgs. Removing orgs and trying again.');
  // }

  //await removeTestOrgs()
  await createTestOrgs()
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

})





after(async function() {
  console.log('Done. removing accounts and test data');
  return removeTestOrgs()
})

const createTestOrgs = async () => {
  await accounts.registerOrganization(client, org1.name, "", 
    admin1.name, admin1.password, admin1.email, org1.source, org1.sourceData);

  await accounts.registerOrganization(client, org2.name, "", 
  admin2.name, admin2.password, admin2.email, org2.source, org2.sourceData);
}

const removeTestOrgs = async () => {
  await wait(1100);

  //total cleanup of org. Must be superuser
  // try {
  // let res = await sa.delete(`http://localhost:8081/v1/account/removeOrganization/{${org1.name}}`)
  // let res2 = await sa.delete(`http://localhost:8081/v1/account/removeOrganization/{${org1.name}}`)
  // //console.log(res, res2)
  // } catch(err) {
  //   console.log('remove org err: ', err)
  // }

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
}

const wait = milSec => new Promise(resolve => setTimeout(() => resolve(), milSec))