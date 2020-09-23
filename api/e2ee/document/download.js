const proto = require('../../../proto/strongdoc_pb')
const SSK = require('../../../../strongsalt-crypto-js/index')
const { getKeysFromDocMeta } = require('./docUtil')

exports.DownloadDocumentStreamE2ee = async function(client, docId, docMeta) {
  const {docKey, macKey} = await getKeysFromDocMeta(client, docMeta)
  
  const decryptor = docKey.decryptStream()

  const mac = SSK.fromBase64(docMeta.getMac())

  const req = client.setValues(proto.DownloaDocumentStreamReq(), {docId})

  const grpcStream = promisify.down(
    client.downloadDocumentStream(req, client.getAuthMeta())
  )

  return {
    grpcStream,
    docId,
    decryptor,
    macKey,
    mac
  }
}

