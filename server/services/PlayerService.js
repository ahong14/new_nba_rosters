const PlayerModel = require('../models/Player');

class PlayerService {
    async getAllPlayers() {
        try {
            const playerResults = await PlayerModel.find({}).limit(50);
            return { success: true, results: playerResults };
        } catch (err) {
            console.error('Error getting results: ', err);
            return { success: false };
        }
    }

    async getActivePlayers() {
        try {
            const playerResults = await PlayerModel.find({
                tid: { $gte: 0 }
            }).limit(50);
            return { success: true, results: playerResults };
        } catch (err) {
            console.error('Error getting results: ', err);
            return { success: false };
        }
    }

    async getPlayersByTeam(teamId) {
        try {
            const playerResults = await PlayerModel.find({ tid: teamId });
            return { success: true, results: playerResults };
        } catch (err) {
            console.error('Error getting results: ', err);
            return { success: false };
        }
    }
}

module.exports = PlayerService;
