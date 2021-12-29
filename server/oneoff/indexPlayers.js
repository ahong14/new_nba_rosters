const elasticsearch = require('elasticsearch');
const fs = require('fs');
require('dotenv').config();

const searchClient = new elasticsearch.Client({
    hosts: [process.env.ELASTICSEARCH_HOST]
});

try {
    fs.readFile('../2021-22.NBA.Roster.json', 'utf8', async (err, data) => {
        const parsedJson = JSON.parse(data);
        let players = parsedJson['players'];

        players = players.map((player) => {
            if (player.stats && player.stats.length > 0) {
                delete player.stats;
            }

            if (!player.name && player.firstName && player.lastName) {
                player.name = `${player.firstName} ${player.lastName}`;
                delete player.firstName;
                delete player.lastName;
                return player;
            }
            return player;
        });

        console.log('indexing players into elasticsearch...');
        players.forEach(async (player) => {
            try {
                const indexResponse = await searchClient.index({
                    index: 'players_index',
                    body: { ...player }
                });
            } catch (err) {
                console.error('Failed to index player: ', player);
                console.error('Error: ', err);
                process.exit();
            }
        });

        console.log('Finished indexing players');
    });
} catch (err) {
    console.error('Error indexing: ', err);
}
