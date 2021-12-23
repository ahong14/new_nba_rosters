const fs = require('fs');
const connectMongoose = require('../dbconfig/mongo');
const PlayerModel = require('../models/Player');
const TeamModel = require('../models/Team');
require('dotenv').config();

const loadMongoRecords = async () => {
    await connectMongoose();
    fs.readFile('../2021-22.NBA.Roster.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
        const parsedJson = JSON.parse(data);
        const players = parsedJson['players'];
        const teams = parsedJson['teams'];

        players.forEach(async (player) => {
            if (!player.name && player.firstName && player.lastName) {
                const currentPlayerModel = new PlayerModel({
                    ...player,
                    name: `${player.firstName} ${player.lastName}`
                });
                await currentPlayerModel.save();
            } else {
                const currentPlayerModel = new PlayerModel({ ...player });
                await currentPlayerModel.save();
            }
        });
        console.log('finished inserting records');

        // teams.forEach(async team => {
        //     const currentTeamModel = new TeamModel({...team});
        //     await currentTeamModel.save();
        // })
    });
};

loadMongoRecords();
