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
 * @param {!string} source - The source of the subscription
 * @param {!string} sourceData - Data relating to the source
 * @return {RegisterOrganizationResponse} - The register organization response.
 */
const registerOrganization = async (client, orgName, orgAddr, adminName,
    adminPassword, adminEmail, source, sourceData) => {
    misc.checkClient(client, false);

    const req = new msg.RegisterOrganizationReq();
    req.setOrgname(orgName);
    req.setOrgaddr(orgAddr);
    req.setUsername(adminName);
    req.setPassword(adminPassword);
    req.setAdminemail(adminEmail);
    req.setSharableorgsList(null);
    req.setMultilevelshare(false);
    req.setSource(source);
    req.setSourcedata(sourceData);
    req.setOrgemail(adminEmail);
    req.setPmid(null);
    

    const result = await client.registerOrganizationSync(req);
    const resp = new msg.RegisterOrganizationResp(result.array);
    return new RegisterOrganizationResponse(resp.getOrgid(), resp.getUserid());
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
 * This requires an administrator privilege.
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

    const req = new msg.RemoveOrganizationReq();
    req.setForce(force);
    result = await client.removeOrganizationSync(req, client.getAuthMeta());
    resp = new msg.RemoveOrganizationResp(result.array);
    return resp.getSuccess();
};

/**
 * Registers a user in the organization.
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!string} username - the username of the new user
 * @param {!string} password - the password of the new user
 * @param {!string} email - the email of the new user
 * @param {!boolean} isAdmin - whether the new user should be an organization administrator
 * @return {!string} userID - ID of the user.
 */
const registerUser = async (client, username, password, email, isAdmin) => {
    misc.checkClient(client, true);
    const req = new msg.RegisterUserReq();
    req.setUsername(username);
    req.setPassword(password);
    req.setEmail(email);
    req.setAdmin(isAdmin);
    result = await client.registerUserSync(req, client.getAuthMeta());
    resp = new msg.RegisterUserResp(result.array);
    return resp.getUserid();
};

/**
 * Removes user from the organization.
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!boolean} userID - ID of the user.
 * @return {!number} - the number of users that were removed.
 */
const removeUser = async (client, userID) => {
    misc.checkClient(client, true);
    const req = new msg.RemoveUserReq();
    req.setUserid(userID);
    result = await client.removeUserSync(req, client.getAuthMeta());
    resp = new msg.RemoveUserResp(result.array);
    return resp.getCount();
};

/**
 * Promotes a regular user to administrator privilege level.
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!boolean} userID - ID of the user
 * @return {!boolean} - Whether the removal was a success
 */
const promoteUser = async (client, userID) => {
    misc.checkClient(client, true);
    const req = new msg.PromoteUserReq();
    req.setUserid(userID);
    result = await client.promoteUserSync(req, client.getAuthMeta());
    resp = new msg.PromoteUserResp(result.array);
    return resp.getSuccess();
};

/**
 * Demotes user, a regular user from administrator privilege level.
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!boolean} userID - ID of the user
 * @return {!boolean} - Whether the removal was a success
 */
const demoteUser = async (client, userID) => {
    misc.checkClient(client, true);
    const req = new msg.DemoteUserReq();
    req.setUserid(userID);
    result = await client.demoteUserSync(req, client.getAuthMeta());
    resp = new msg.DemoteUserResp(result.array);
    return resp.getSuccess();
};

/**
 * Adds a sharable Organization.
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!boolean} orgID - ID of the organization
 * @return {!boolean} - Whether the removal was a success
 */
const addSharableOrg = async (client, orgID) => {
    misc.checkClient(client, true);
    const req = new msg.AddSharableOrgReq();
    req.setNeworgid(orgID);
    result = await client.addSharableOrgSync(req, client.getAuthMeta());
    resp = new msg.AddSharableOrgResp(result.array);
    return resp.getSuccess();
};

/**
 * Removes a sharable Organization.
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!boolean} orgID - ID of the organization
 * @return {!boolean} - Whether the removal was a success
 */
const removeSharableOrg = async (client, orgID) => {
    misc.checkClient(client, true);
    const req = new msg.RemoveSharableOrgReq();
    req.setRemoveorgid(orgID);
    result = await client.removeSharableOrgSync(req, client.getAuthMeta());
    resp = new msg.RemoveSharableOrgResp(result.array);
    return resp.getSuccess();
};

/**
 * Sets Multi-level Sharing.
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @param {!boolean} isEnable - whether to enable or disable Multi-level Sharing
 * @return {!boolean} - Whether the removal was a success
 */
const setMultiLevelSharing = async (client, isEnable) => {
    misc.checkClient(client, true);
    const req = new msg.SetMultiLevelSharingReq();
    req.setEnable(isEnable);
    result = await client.setMultiLevelSharingSync(req, client.getAuthMeta());
    resp = new msg.SetMultiLevelSharingResp(result.array);
    return resp.getSuccess();
};


/**
 * Lists users in the organization.
 *
 * @function
 * @param {!StrongDoc} client - The StrongDoc client used to call this API.
 * @return {!array of User} - Array of objects containing data for each user in the organization.
 */
const listUsers = async (client) => {
    misc.checkClient(client, true);
    const req = new msg.ListUsersReq();
    result = await client.listUsersSync(req, client.getAuthMeta());
    resp = new msg.ListUsersResp(result.array);
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

    get isAdmin() {
        return this._admin;
    }

    get orgId() {
        return this._orgId;
    }

    get email() {
        return this._email;
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

const getUserInfo = async (client) => {
    misc.checkClient(client, true);
    const req = new msg.GetUserInfoReq();
    const result = await client.getUserInfoSync(req, client.getAuthMeta());
    resp = new msg.GetUserInfoResp(result.array);

    return {
        userId: resp.getUserid(),
        email: resp.getEmail(),
        userName: resp.getUsername(),
        orgId: resp.getOrgid(),
        isAdmin: resp.getIsadmin()
    }
}

const getAccountInfo = async (client) => {
    misc.checkClient(client, true);
    const req = new msg.GetAccountInfoReq();
    const result = await client.getAccountInfoSync(req, client.getAuthMeta());
    const resp = new msg.GetAccountInfoResp(result.array);

    return {
        orgId: resp.getOrgid(),
        subscription: {
            type: resp.getSubscription().getType(),
            status: resp.getSubscription().getStatus()},
        payments: resp.getPaymentsList().map(rcpPay => toPayment(rcpPay)),
        orgAddress: resp.getOrgaddress(),
        multiLevelShare: resp.getMultilevelshare(),
        sharableOrgs: resp.getSharableorgsList()
    }
}

const toPayment = pay => ({
    billedAt: toDate(pay.getBilledat()),
    periodStart: toDate(pay.getPeriodstart()),
    periodEnd: toDate(pay.getPeriodend()),
    amount: pay.getAmount(),
    status: pay.getStatus()
})

const toDate = (rpcDate) => rpcDate && rpcDate.toDate()

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
exports.getUserInfo = getUserInfo;
exports.getAccountInfo = getAccountInfo;