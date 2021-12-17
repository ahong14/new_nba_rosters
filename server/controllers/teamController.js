const TeamsService = require('../services/TeamsService');

exports.getAllTeams = async (req, res) => {
    const teamsService = new TeamsService();
    const teamResults = await teamsService.getAllTeams();
    if (!teamResults.success) {
        return res.status(400).send('Error getting teams.');
    }
    return res.status(200).send(teamResults);
};
