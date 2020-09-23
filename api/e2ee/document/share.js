const proto = require('../../../proto/strongdoc_pb')
const SSK = require('../../../../strongsalt-crypto-js/index')
const { getKeysFromDocMeta } = require('./docUtil')

exports.shareDocumentE2EE = async function(client, docId, shareDocMeta) {
  const {docKey, macKey} = await getKeysFromDocMeta(client, shareDocMeta)
}