const grpc = require('grpc');
const sd = require('../client/strongDoc');

const getAuthMeta = (token) => {
    const meta = new grpc.Metadata();
    meta.add('Authorization', `bearer ${token}`);
    return meta;
}

const checkClient = (client, needToken) => {
    if (!client) {
        throw "Client can not be null.";
    }
    if (!(client instanceof sd.StrongDoc)) {
        throw "Client is not an instance of strongDoc client.";
    }
    if (needToken && !client.getAuthMeta()) {
        throw "Client does not contain authorization token. Need to login first.";
    }
    return true;
}

exports.getAuthMeta = getAuthMeta;
exports.checkClient = checkClient;