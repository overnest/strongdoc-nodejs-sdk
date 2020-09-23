//const proto = require('../../../proto/strongdoc_pb')
const SSK = require('../../../../strongsalt-crypto-js/index')

exports.getKeysFromDocMeta = async function (client, docMeta) {
  let docKeyEncryptor
  if (docMeta.getIskeyorgs()) {
    const encSerialAsymKey = SSK.fromBase64(docMeta.getEncUserAsymKey())
    const serialAsymKey = client.passwordKey.decrypt(encSerialAsymKey)
    docKeyEncryptor = new SSK()
    await docKeyEncryptor.deserialize(serialAsymKey)
  } else {
    docKeyEncryptor = client.passwordKey
  }

  const encSerialAsymKey = SSK.fromBase64(docMeta.getDockeyencryptor())
  const serialAsymKey = docKeyEncryptor.decrypt(encSerialAsymKey)
  const asymKey = new SSK()
  await asymKey.deserialize(serialAsymKey)

  const encSerialDocKey = SSK.fromBase64(docMeta.getEncdockey())
  const serialDocKey = asymKey.decrypt(encSerialDocKey)
  const docKey = new SSK()
  await docKey.deserialize(serialDocKey)

  const encMacKey = SSK.fromBase64(docMeta.getEncmackey())
  const serialMacKey = asymKey.decrypt(encMacKey)
  const macKey = new SSK()
  await macKey.deserialize(serialMacKey)

  return {
    docKey,
    macKey
  }
}