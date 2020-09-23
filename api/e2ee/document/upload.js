const proto = require('../../../proto/strongdoc_pb')
const SSK = require('../../../../strongsalt-crypto-js/index')

exports.UplaodDocumentStreamE2ee = async function(client, plainStream, docName) {
  const {userPublicKey, orgPubKeys} = await client.getUserPublicKeys()

  const fileKey = new SSK('XCHACHA20')
  await fileKey.generateKey()
  const serialFileKey = fileKey.serialize()

  const MACKey = new SSK('HMAC-SHA512')
  await MACKey.generateKey()
  const serialMac = MACKey.serialize()

  const userEncFileKey = userPublicKey.encrypt(serialFileKey)
  const protoUserEncDocKey = client.setValues(
    new proto.EncryptedKey(),
    {
      encKey: SSK.toBase64(userEncFileKey),
      encryptorId: userPublicKey.keyId,
      ownerId: userPublicKey.ownerId
    }
  )


  const userEncMac = userPublicKey.encrypt(serialMac)
  const protoUserEncMacKey = client.setValues(
    new proto.EncryptedKey(),
    {
      encKey: SSK.toBase64(userEncMac),
      encryptorId: userPublicKey.keyId,
      ownerId: userPublicKey.ownerId
    }
  )

  const protoOrgEncDocKeys = orgPubKeys.map(key => {
    const orgEncFileKey = key.encrypt(serialFileKey)
    return client.setValues(
      new proto.EncryptedKey(),
      {
        encKey: SSK.toBase64(orgEncFileKey),
        encryptorId: userPublicKey.keyId,
        ownerId: userPublicKey.ownerId
      }
    )
  })

  const protoOrgEncMacKeys = orgPubKeys.map(key => {
    const orgEncMacKey = key.encrypt(serialMac)
    return client.setValues(
      new proto.EncryptedKey(),
      {
        encKey: SSK.toBase64(orgEncMacKey),
        encryptorId: userPublicKey.keyId,
        ownerId: userPublicKey.ownerId
      }
    )
  })
  const done = () => ''
  const stream = client.uploadDocumentStream(client.getAuthMeta(), done)
  const preMetadata = new proto.UploadDocPreMetadata()
  client.setValues(preMetadata, {
    docName,
    clientSide: true,
    userEncDocKey: protoUserEncDocKey,
    userEncMacKey: protoUserEncMacKey,
    orgEncDocKeys: protoOrgEncDocKeys,
    orgEncMacKeys: protoOrgEncMacKeys
  })

  const preMetaDataReq = client.setValues(
    new proto.UploadDocStreamReq(),
    {nameOrData: preMetaData} //GO SDK uses "proto.UploadDocStreamReq_PreMetadata"
  )
  stream.write(preMetaDataReq)

  const encryptor = fileKey.encryptStream()
  const bytes = plainStream.read(client.blockSize)

}