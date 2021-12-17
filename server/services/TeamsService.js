const TeamModel = require('../models/Team');

class TeamsService {
    async getAllTeams() {
        try {
            const teamResults = await TeamModel.find({});
            return { success: true, results: teamResults };
        } catch (err) {
            console.error('Error getting team results: ', err);
            return { success: false };
        }
    }
}

module.exports = TeamsService;
