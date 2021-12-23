const elasticsearch = require('elasticsearch');
const fs = require('fs');
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
    fs.readFile('../2021-22.NBA.Roster.json', 'utf8', (err, data) => {
        const parsedJson = JSON.parse(data);
        const players = parsedJson['players'];

        console.log('indexing players into elasticsearch...');
        players.forEach(async (player) => {
            if (!player.name && player.firstName && player.lastName) {
                let indexPlayer = { ...player };
                indexPlayer.name = `${player.firstName} ${player.lastName}`;
                delete indexPlayer.firstName;
                delete indexPlayer.lastName;
                const indexResponse = await searchClient.index({
                    index: 'players_index',
                    type: 'player',
                    body: {
                        ...indexPlayer
                    }
                });
            } else {
                const indexResponse = await searchClient.index({
                    index: 'players_index',
                    type: 'player',
                    body: { ...player }
                });
            }
        });
        console.log('Finished indexing players');
    });
} catch (err) {
    console.error('Error indexing: ', err);
}
