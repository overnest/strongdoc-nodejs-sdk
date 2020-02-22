const misc = require('../util/misc');

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

exports.login = login;