const grpc = require('grpc');
const msg = require('../proto/search_pb');
const misc = require('../util/misc');

/**
 * Search for document that contains a specific word.
 * 
 * @function
 * @param {StrongDoc} client - The StrongDoc client used to call this API.
 * @param {string} query - The query string.
 * @return {SearchResponse} - The search response.
 */
const search = async (client, query) => {
    misc.checkClient(client, true);

    const authMeta = client.getAuthMeta();
    const req = new msg.SearchRequest();
    req.setQuery(query);
    result = await client.searchSync(req, authMeta);
    resp = new msg.SearchResponse(result.array);
    return (new SearchResponse(resp));
};

/**
 * The response returned from the search API call.
 * @class SearchResponse
 * @hideconstructor
 */
class SearchResponse {
    /**
     * @constructs
     * @private
     * @param {!msg.SearchResponse} resp - The search response.
     */
    constructor(resp) {
        this.hitList = resp.getHitsList().map(hit => 
            new DocumentResult(hit.getDocid(), hit.getScore()));
    }

    /**
     * Returns the hit list of the search.
     * @return {!Array<!DocumentResult>} The hit list of the search.
     */
    getHitsList() {
        return this.hitList;
    }
}

/**
 * The document that matches the search result.
 * @class DocumentResult
 * @hideconstructor
 */
class DocumentResult {
    /**
     * @constructs
     * @private
     * @param {string} docID - The matching document ID.
     * @param {number} score - The score of the matching document.
     */
    constructor(docID, score) {
        this.docID = docID;
        this.score = score;
    }

    /**
     * Returns the matching document ID.
     * @return {string} The matching document ID.
     */
    getDocID() {
        return this.docID;
    }

    /**
     * Returns the score of the matching document.
     * @return {number} The score of the matching document.
     */
    getScore() {
        return this.score;
    }
}

exports.search = search;