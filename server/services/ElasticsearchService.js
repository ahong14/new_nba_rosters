const elasticsearch = require('elasticsearch');

class ElasticsearchService {
    constructor() {
        this.searchClient = new elasticsearch.Client({
            hosts: [process.env.ELASTICSEARCH_HOST]
        });
    }

    async queryElasticSearch(query, fromPosition = 0) {
        try {
            // Example query: { bool: { must: [{ match: { name: 'Otto' } }] } }
            const results = await this.searchClient.search({
                index: 'players_index',
                body: {
                    query: query
                },
                from: fromPosition,
                size: 20
            });
            let searchResults = results.hits.hits || [];
            searchResults = searchResults.map((result) => {
                return result._source || {};
            });
            return searchResults || [];
        } catch (err) {
            console.error('Error querying: ', err);
            return [];
        }
    }
}

module.exports = ElasticsearchService;
