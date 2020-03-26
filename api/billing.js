const msg = require('../proto/strongdoc_pb');
const misc = require('../util/misc');

/**
 * Ends session and retires JWT token.
 *
 * @function
 * @private
 * @param {StrongDoc} client - The StrongDoc client used to call this API.
 * @return {string} - Status of getBillingDetails function.
 */
const getBillingDetails = async (client) => {
    misc.checkClient(client, true);
    const authMeta = client.getAuthMeta();
    const req = new msg.GetBillingDetailsReq();
    let result = await client.getBillingDetailsSync(req, authMeta);
    const resp = new msg.GetBillingDetailsResp(result.array);
    return new BillingDetails(resp);
};

/**
 * @typedef BillingDetails
 * @type {object}
 * @property {number} totalCost - Total cost incurred during the requested billing period
 */

class BillingDetails {
    constructor(response) {
        this.currentPeriod = new BillingPeriod(response.getCurrentperiod());
        this.totalCost = response.getTotalcost();
        this.documents = new Cost(response.getDocuments());
        this.index = new Cost(response.getIndex());
        this.traffic = new Traffic(response.getTraffic());
        sethislf.nextPeriod = new BillingPeriod(response.getNextperiod());
    }
}

class Traffic {
    constructor(protoTraffic) {
        this.cost = protoTraffic.getCost();
        this.incoming = protoTraffic.getIncoming();
        this.outgoing = protoTraffic.getOutgoing();
    }
}

class Cost {
    constructor(protoIndex) {
        this.size = protoIndex.getSize();
        this.cost = protoIndex.getCost();
    }
}

class BillingPeriod {
    constructor(protoBillingPeriod) {
        this.periodStart = protoBillingPeriod.getPeriodstart();
        this.periodEnd = protoBillingPeriod.getPeriodend();
        this.CurrentPeriod = protoBillingPeriod.getFrequency();
    }
}

const getBillingFrequencyList = async (client) => {
    misc.checkClient(client, true);
    const authMeta = client.getAuthMeta();
    const req = msg.GetBillingFrequencyListReq()
    let result = await client.GetBillingFrequencyListSync(req, authMeta);
    const resp = new msg.GetBillingFrequencyListResp(result.array);
    return resp.getBillingFrequencyList().map(bf => new BillingFrequency(bf))
}

/**
 * @class BillingFrequency
 */
class BillingFrequency {
    constructor(bf) {
        this.frequency = bf.getFrequency();
        this.validFrom = bf.getValidFrom();
        this.validTo = bf.getValidTo();
    }
}
/**
 * 
 * @param {StrongDoc} client 
 * @param {number} timeIntervalFrequency 
 * @param {TimeStamp} validFrom 
 */
const setNextBillingFrequency = async (client, timeIntervalFrequency, validFrom) => {
    misc.checkClient(client, true);
    const authMeta = client.getAuthMeta();
    const req = msg.SetNextBillingFrequencyReq()
    req.setFrequency(timeIntervalFrequency)
    req.setValidFrom(validFrom)
    let result = await client.SetNextBillingFrequencySync(req, authMeta);
    const resp = new msg.SetNextBillingFrequencyRes(result.array);
    return new BillingFrequency(resp.getNextBillingFrequency())
}


exports.getBillingDetails = getBillingDetails;
