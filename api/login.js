const misc = require('../util/misc');
const msg = require('../proto/accounts_pb');
const SSK = require('../../strongsalt-crypto-js/index')
/**
 * Verifies the user and organization identity, and returns a JWT token for future API use.
 * 
 * @function
 * @param {StrongDoc} client - The StrongDoc client used to call this API.
 * @param {string} userID - The login user ID
 * @param {string} password - The login user password
 * @param {string} orgID - The login organization ID
 * @return {string} - The JWT token used to authenticate user/org when using StrongDoc APIs
 */
const login = async (client, userID, password, orgID) => {
    misc.checkClient(client, false);
    return client.loginInternal(userID, password, orgID);
};
/**
 * Ends session and retires JWT token.
 *
 * @function
 * @private
 * @param {StrongDoc} client - The StrongDoc client used to call this API.
 * @return {string} - Status of logout function.
 */
const logout = async (client) => {
    misc.checkClient(client, true);
    const authMeta = client.getAuthMeta();
    const req = new msg.LogoutReq();
    let result = await client.logoutSync(req, authMeta);
    const resp = new msg.LogoutResp(result.array);
    return resp.getStatus();
};

exports.login = login;
exports.logout = logout;