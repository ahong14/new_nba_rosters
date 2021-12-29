const elasticsearch = require('elasticsearch');
require('dotenv').config();

const searchClient = new elasticsearch.Client({
    hosts: [process.env.ELASTICSEARCH_HOST]
});

try {
    console.log('creating new index...');
    searchClient.indices.create(
        {
            index: 'players_index'
        },
        (err, response, status) => {
            if (err) {
                return console.error(err);
            }
            console.log('created new index: ', response);
        }
    );
} catch (err) {
    console.error(err);
}
