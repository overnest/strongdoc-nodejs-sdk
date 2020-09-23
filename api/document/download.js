const proto = require('../../../proto/strongdoc_pb')
const SSK = require('../../../../strongsalt-crypto-js/index')

exports.prepareDownloadDoc = async function(client, docId) {
  const prepReq = client.setValues(new proto.PrepareDownloadDocReq(), {docId})
  let prepResp = await client.PrepareDownloadDocAsync(prepReq, client.getAuthMeta())

  prepResp = new proto.prepareDownloadDocResp(prepResp.array)
  const docMeta = prepResp.getDocumentaccessmetadata()
  return docMeta
}