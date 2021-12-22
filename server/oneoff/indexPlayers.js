const elasticsearch = require('elasticsearch');
const fs = require('fs');
require('dotenv').config();

const searchClient = new elasticsearch.Client({
    hosts: [process.env.ELASTICSEARCH_HOST]
});

try {
    // searchClient.indices.create(
    //     {
    //         index: 'players_index'
    //     },
    //     (err, response, status) => {
    //         if (err) {
    //             return console.error(err);
    //         }
    //         console.log('created new index: ', response);
    //     }
    // );
    fs.readFile('../2021-22.NBA.Roster.json', 'utf8', (err, data) => {
        const parsedJson = JSON.parse(data);
        const players = parsedJson['players'];

        players.forEach(async player => {
            const indexResponse = await searchClient.index({
                index: 'players_index',
                type: 'player',
                body: { ...player }
            });
        });
    });
} catch (err) {
    console.error('Error indexing: ', err);
}
