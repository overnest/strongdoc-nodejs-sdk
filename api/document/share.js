const proto = require('../../proto/strongdoc_pb')
const misc = require('../../util/misc')
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
  const req = new proto.ShareDocumentReq();
  req.setDocid(docID);
  req.setUserid(userID);
  result = await client.shareDocumentAsync(req, authMeta);
  resp = new proto.ShareDocumentResp(result.array);
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
  const req = new proto.UnshareDocumentReq();
  req.setDocid(docID);
  req.setUserid(userID);
  result = await client.unshareDocumentAsync(req, authMeta);
  resp = new proto.UnshareDocumentResp(result.array);
  return resp.getCount();
};

const prepareShareDocument = async (client, docId, userId) => {
  const req = client.setValues(new proto.PrepareShareDocumentReq(), {docId, userId})
  let result = await client.prepareShareDocumentAsync(req, client.getAuthMeta())
  const prepResp = new proto.PrepareShareDocumentResp(result.array)
  return client.getValues(prepResp)
}

module.exports = {
  shareDocument,
  unshareDocument
}