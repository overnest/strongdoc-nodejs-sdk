const msg = require('../proto/accounts_pb');
const misc = require('../util/misc')

/**
 * Registers a new organization. A new administrator user will also be created.
 * New users can be added using this administrator account.
 * 
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!string} orgName - The organization name to create
 * @param {!string} orgAddr - The organization address
 * @param {!string} adminName - The organization administrator name
 * @param {!string} adminPassword - The organization administrator password
 * @param {!string} adminEmail - The organization administrator email
 * @return {RegisterOrganizationResponse} - The register organization response.
 */
const registerOrganization = async (client, orgName, orgAddr, adminName, 
    adminPassword, adminEmail) => {
    misc.checkClient(client, false);

    const req = new msg.RegisterOrganizationRequest();
    req.setOrgname(orgName);
    req.setOrgaddr(orgAddr);
    req.setUsername(adminName);
    req.setPassword(adminPassword);
    req.setEmail(adminEmail);
    req.setSharableorgsList(null);
    req.setMultilevelshare(false);

    result = await client.registerOrganizationSync(req);
    resp = new msg.RegisterOrganizationResponse(result.array);
    return (new RegisterOrganizationResponse(resp.getOrgid(), resp.getUserid())); 
};


/**
 * The response returned from the register organization API call.
 * @class RegisterOrganizationResponse
 * @hideconstructor
 */
class RegisterOrganizationResponse {
    /**
     * @constructs
     * @private
     * @param {!string} orgID - The organization ID
     * @param {!string} userID - the user ID
     */
    constructor(orgID, userID) {
        this.orgID = orgID;
        this.userID = userID;
    }

    /**
     * Returns the organiation ID
     * @return {!string} The organization ID
     */
    getOrgID() {
        return this.orgID;
    }

    /**
     * Returns the user ID
     * @return {!string} The userID
     */
    getUserID() {
        return this.userID;
    }
}

/**
 * Removes an organization, deleting all data stored with the organization. 
 * This requires an administrator priviledge.
 * 
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!boolean} force - If this is false, removal will fail if there 
 *                          are still data stored with the organization. 
 *                          This prevents accidental deletion.
 * @return {!boolean} - Whether the removal was a success
 */
const removeOrganization = async (client, force) => {
    misc.checkClient(client, true);

    const req = new msg.RemoveOrganizationRequest();
    req.setForce(force);
    result = await client.removeOrganizationSync(req, client.getAuthMeta());
    resp = new msg.RemoveOrganizationResponse(result.array);
    return resp.getSuccess();
};

exports.registerOrganization = registerOrganization;
exports.removeOrganization = removeOrganization;
