
const fs = require('fs');
const path = require('path');
const grpc = require('grpc');
const bluebird = require('bluebird');
const service = require('../proto/strongdoc_grpc_pb')
const msg = require('../proto/accounts_pb');
const misc = require('../util/misc');
const { promisifyRequestStream } = require('../util/promisifyStream')

/**
 * This is the StrongDoc client that implements all the StrongDoc services.
 *
 * @class StrongDoc
 * @hideconstructor
 */
class StrongDoc extends service.StrongDocServiceClient {
    /**
     * The location of the StrongDoc service.
     * @memberof StrongDoc
     * @readonly
     * @static
     * @property {object} DEFAULT - The default service location, which is the production cluster.
     * @property {object} LOCAL - This is for testing only. Should not be used.
     */
    static ServciceLocation = {
        DEFAULT: {
            host: "api.strongsalt.com:9090",
            cert: "../cert/ssca.cert.pem"},
        LOCAL: {
            host: "localhost:9090",
            cert: "../cert/localhost.crt"}
    }

    /**
     * @constructs
     * @param {StrongDoc.ServciceLocation} location - The location of the StrongDoc service
     */
    constructor(location) {
        if (!location.hasOwnProperty("host") || !location.hasOwnProperty("cert")) {
            throw "location is not an instance of ServciceLocation.";
        }

        const rootCerts = fs.readFileSync(path.join(__dirname, location.cert));
        const ssl = grpc.credentials.createSsl(rootCerts);
        super(location.host, ssl);

        for (var method in this.$method_definitions) {
            //console.log(method)
            var def = this.$method_definitions[method];
            if (def.requestStream === false && def.responseStream === false) {
                // For non-streaming API functions(uni-directional), use bluebird to promisify 
                // it. The new function name will be the original function name plus "Sync".
                // The new functions will return a promise, and the calling code must use "await".
                this[method+"Sync"] = bluebird.promisify(this[method], {context: this});
            }

            if (def.requestStream === true) {
                this[method+"Async"] = promisifyRequestStream(this[method], this);
            }
        }
    }

    /**
     * Verifies the user and organization identity, and returns a JWT token for future API use.
     * 
     * @function
     * @private
     * @param {string} userID - The login user ID
     * @param {string} password - The login user password
     * @param {string} orgID - The login organization ID
     * @return {string} - The JWT token used to authenticate user/org when using StrongDoc APIs
     */
    async loginInternal(userID, password, orgID) {
        const req = new msg.LoginReq();
        req.setUserid(userID);
        req.setPassword(password);
        req.setOrgid(orgID);
        let result = await this.loginSync(req);
        const resp = new msg.LoginResp(result.array);
        if (resp && resp.getToken()) {
            this.authMeta = misc.getAuthMeta(resp.getToken());
            return resp.getToken();
        }

        return null;
    }


    /**
     * Returns the authentication meta data header. If the user logged in using the
     * client, this header will be stored with the client.
     * 
     * @function
     * @return [grpc.Metadata]{@link https://grpc.github.io/grpc/node/grpc.Metadata.html} - The authentication meta data header that includes the JWT token to be used for gRPC API calls. 
     */
    getAuthMeta() {
        return this.authMeta;
    }
}

module.exports = StrongDoc;