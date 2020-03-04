const msg = require('../proto/strongdoc_pb');
const promisify = require('../util/promisifyStream');
const misc = require('../util/misc');

/**
 * Configuration simply returns the
 * current configuration of the server as a string.
 *
 * @function
 * @return {GetConfigurationResp} - The search response.
 */
const getConfiguration = async (client) => {
    misc.checkClient(client, true);
    const authMeta = client.getAuthMeta();
    const req = new msg.GetConfigurationReq();
    result = await client.getConfigurationSync(req, authMeta);
    resp = new msg.GetConfigurationResp(result.array);
    return (new GetConfigurationResp(resp));
};

class GetConfigurationResp {
    /**
     * @constructs
     * @private
     * @param {!msg.GetConfigurationResp} res - The config response.
     */
    constructor(res) {
        this.config = res.getConfiguration()
    }

    getConfiguration() {
        return this.config
    }
}

exports.getConfiguration = getConfiguration