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
    const req = new msg.GetBillingDetailsRequest();
    let result = await client.getBillingDetailsSync(req, authMeta);
    const resp = new msg.GetBillingDetailsResponse(result.array);
    return new BillingDetails(resp);
};

class BillingDetails {
    constructor(response) {
        self.currentPeriod = new BillingPeriod(response.getCurrentperiod());
        self.totalCost = response.getTotalcost();
        self.documents = new Cost(response.getDocuments());
        self.index = new Cost(response.getIndex());
        self.traffic = new Traffic(response.getTraffic());
        self.nextPeriod = new BillingPeriod(response.getNextperiod());
    }
}

class Traffic {
    constructor(protoTraffic) {
        self.cost = protoTraffic.getCost();
        self.incoming = protoTraffic.getIncoming();
        self.outgoing = protoTraffic.getOutgoing();
    }
}

class Cost {
    constructor(protoIndex) {
        self.size = protoIndex.getSize();
        self.cost = protoIndex.getCost();
    }
}

class BillingPeriod {
    constructor(protoBillingPeriod) {
        self.periodStart = protoBillingPeriod.getPeriodstart();
        self.periodEnd = protoBillingPeriod.getPeriodend();
        self.CurrentPeriod = protoBillingPeriod.getFrequency();
    }
}


exports.getBillingDetails = getBillingDetails;
