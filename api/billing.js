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
    constructor(res) {
        this.periodStart = res.getPeriodstart() && res.getPeriodstart().toDate();
        this.periodEnd = res.getPeriodend() && res.getPeriodend().toDate();
        this.totalCost = res.getTotalcost();
        this.documents = getDocumentCosts(res.getDocuments());
        this.search = getSearchCosts(res.getSearch());
        this.traffic = getTrafficCosts(res.getTraffic());
        this.frequency = new BillingFrequency(res.getBillingfrequency());
    }
}

/**
 * @typedef DocumentCosts
 * @type {object}
 * @property {number} cost
 * @property {number} size
 * @property {string} tier
 */

/**
 * 
 * @param {Object} documentCosts - documentCosts response
 * @returns {DocumentCosts}
 */
const getDocumentCosts = (documentCosts) => ({
    cost: documentCosts.getCost(),
    size: documentCosts.getSize(),
    tier: documentCosts.getTier()
})

 /**
 * @typedef SearchCosts
 * @type {object}
 * @property {number} cost
 * @property {number} size
 * @property {string} tier
 */

/**
 * 
 * @param {Object} protoSearchResp 
 * @returns {SearchCosts}
 */
const getSearchCosts = (protoSearchResp) => ({
    cost: protoSearchResp.getCost(),
    size: protoSearchResp.getSize(),
    tier: protoSearchResp.getTier()
})

 /**
 * @typedef TrafficCosts
 * @type {Object}
 * @property {number} cost
 * @property {number} incoming
 * @property {number} outgoing
 */

 /**
  * @param {Object} protoTraffic
  * @returns {TrafficCosts}
  */
  const getTrafficCosts = (protoTraffic) =>({
      cost: protoTraffic.getCost(),
      incoming: protoTraffic.getIncoming(),
      outgoing: protoTraffic.getOutgoing(),
      tier: protoTraffic.getTier()
  })



const getBillingFrequencyList = async (client) => {
    misc.checkClient(client, true);
    const authMeta = client.getAuthMeta();
    const req = new msg.GetBillingFrequencyListReq()
    let result = await client.getBillingFrequencyListSync(req, authMeta);
    const resp = new msg.GetBillingFrequencyListResp(result.array);
    return resp.getBillingfrequencylistList().map(bf => new BillingFrequency(bf))
}

/**
 * @class BillingFrequency
 */
class BillingFrequency {
    constructor(bf) {
        this.frequency = bf.getFrequency();
        this.validFrom = bf.getValidfrom() && bf.getValidfrom().toDate();
        this.validTo = bf.getValidto() && bf.getValidto().toDate();
    }
}
/**
 * 
 * @param {StrongDoc} client 
 * @param {number} timeIntervalFrequency 
 * @param {Date} validFromDate 
 */
const setNextBillingFrequency = async (client, timeIntervalFrequency, validFromDate) => {
    misc.checkClient(client, true);
    const authMeta = client.getAuthMeta();
    const req = new msg.SetNextBillingFrequencyReq()
    req.setFrequency(timeIntervalFrequency)

    const timestamp = new global.proto.google.protobuf.Timestamp()
    timestamp.fromDate(validFromDate)
    req.setValidfrom(timestamp)
    let result = await client.setNextBillingFrequencySync(req, authMeta);
    const resp = new msg.SetNextBillingFrequencyResp(result.array);
    return new BillingFrequency(resp.getNextbillingfrequency())
}

const getLargeTraffic = async (client, at) => {
    misc.checkClient(client, true);
    const req = new msg.GetLargeTrafficReq();
    req.setAt(toRpcTimestamp(at));
    const result = await client.getLargeTraffic(req, client.getAuthMeta());

    const resp = new msg.GetLargeTrafficResp(result.array);
    return {
        largeTraffic: resp.getLargetrafficList().map(rpc => toLargeTraffic(rpc)),
        periodStart: toDate(resp.getPeriodstart()),
        periodEnd: toDate(resp.getPeriodend())
    }
}

const toLargeTraffic = (rpc) => ({
    time: toDate(rpc.getTime()),
    userId: rpc.getUserid(),
    method: rpc.getMethod(),
    URI: rpc.getUri(),
    incoming: rpc.getIncoming(),
    outgoing: rpc.getOutgoing()
})

const toRpcTimestamp = (jsDate) => {
    const timestamp = new global.proto.google.protobuf.Timestamp()
    timestamp.fromDate(jsDate)
    return timestamp;
}

const toDate = (rpcDate) => rpcDate && rpcDate.toDate()


exports.getBillingDetails = getBillingDetails;
exports.getBillingFrequencyList = getBillingFrequencyList;
exports.setNextBillingFrequency = setNextBillingFrequency;
exports.getLargeTraffic = getLargeTraffic;
