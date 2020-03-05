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

/**
 * Removes user, TODO: add more detail
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!boolean} docID -
 * @return {!boolean} - Whether the removal was a success
 */
const registerUser = async (client, username, password, email, isAdmin) => {
    misc.checkClient(client, true);
    const req = new msg.RegisterUserRequest();
    req.setUsername(username);
    req.setPassword(password);
    req.setEmail(email);
    req.setAdmin(isAdmin)
    result = await client.registerUserSync(req, client.getAuthMeta());
    resp = new msg.RegisterUserResponse(result.array);
    return resp.getUserid();
};

/**
 * Removes user, TODO: add more detail
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!boolean} docID -
 * @return {!boolean} - Whether the removal was a success
 */
const removeUser = async (client, userID) => {
    misc.checkClient(client, true);
    const req = new msg.RemoveUserRequest();
    req.setUserid(userID);
    result = await client.removeUserSync(req, client.getAuthMeta());
    resp = new msg.RemoveUserResponse(result.array);
    return resp.getCount();
};

/**
 * Promotes user, TODO: add more detail
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!boolean} docID -
 * @return {!boolean} - Whether the removal was a success
 */
const promoteUser = async (client, userID) => {
    misc.checkClient(client, true);
    const req = new msg.PromoteUserRequest();
    req.setUserid(userID);
    result = await client.promoteUserSync(req, client.getAuthMeta());
    resp = new msg.PromoteUserResponse(result.array);
    return resp.getSuccess();
};

/**
 * Demotes user, TODO: add more detail
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!boolean} docID -
 * @return {!boolean} - Whether the removal was a success
 */
const demoteUser = async (client, userID) => {
    misc.checkClient(client, true);
    const req = new msg.DemoteUserRequest();
    req.setUserid(userID);
    result = await client.demoteUserSync(req, client.getAuthMeta());
    resp = new msg.DemoteUserResponse(result.array);
    return resp.getSuccess();
};

const addSharableOrg = async (client, orgID) => {
    misc.checkClient(client, true);
    const req = new msg.AddSharableOrgRequest();
    req.setNeworgid(orgID);
    result = await client.addSharableOrgSync(req, client.getAuthMeta());
    resp = new msg.AddSharableOrgResponse(result.array);
    return resp.getSuccess();
};

const removeSharableOrg = async (client, orgID) => {
    misc.checkClient(client, true);
    const req = new msg.RemoveSharableOrgRequest();
    req.setRemoveorgid(orgID);
    result = await client.removeSharableOrgSync(req, client.getAuthMeta());
    resp = new msg.RemoveSharableOrgResponse(result.array);
    return resp.getSuccess();
};

const setMultiLevelSharing = async (client, isEnable) => {
    misc.checkClient(client, true);
    const req = new msg.SetMultiLevelSharingRequest();
    req.setEnable(isEnable);
    result = await client.setMultiLevelSharingSync(req, client.getAuthMeta());
    resp = new msg.SetMultiLevelSharingResponse(result.array);
    return resp.getSuccess();
};


/**
 * Lists user, TODO: add more detail
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!boolean} docID -
 * @return {!boolean} - Whether the removal was a success
 */
const listUsers = async (client) => {
    misc.checkClient(client, true);
    const req = new msg.ListUsersRequest();
    result = await client.listUsersSync(req, client.getAuthMeta());
    resp = new msg.ListUsersResponse(result.array);
    let protoOrgusersList = resp.getOrgusersList();
    let usersList = new Array(0);
    protoOrgusersList.forEach(orgUser => {
        user = new User(orgUser)
        usersList.push(user)
    });
    return usersList;
};

class User {
    get userName() {
        return this._userName;
    }

    get userid() {
        return this._userid;
    }

    get admin() {
        return this._admin;
    }
    /**
     * @constructs
     * @private
     * @param {string} docID - The matching document ID.
     * @param {string} docName - The docName of the matching document.
     * * @param {string} size - The size of the matching document.
     */
    constructor(OrgUser) {
        this._userName = OrgUser.getUsername();
        this._userid = OrgUser.getUserid();
        this._admin = OrgUser.getIsadmin();
    }
    /**
     * @constructs
     * @public
     */
    toString() {
        const div = "|";
        return this._userName + div + this._userid + div + this._admin
    }
}

exports.registerOrganization = registerOrganization;
exports.removeOrganization = removeOrganization;
exports.registerUser = registerUser;
exports.removeUser = removeUser;
exports.promoteUser = promoteUser;
exports.demoteUser = demoteUser;
exports.listUsers = listUsers;
exports.addSharableOrg = addSharableOrg;
exports.removeSharableOrg = removeSharableOrg;
exports.setMultiLevelSharing = setMultiLevelSharing;