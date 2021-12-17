const PlayerService = require('../services/PlayerService');

exports.getAllPlayers = async (req, res) => {
    const playerService = new PlayerService();
    const playerResults = await playerService.getAllPlayers();
    if (!playerResults.success) {
        return res.status(400).send('Error getting players');
    }
    return res.status(200).send(playerResults);
};

exports.getActivePlayers = async (req, res) => {
    const playerService = new PlayerService();
    const playerResults = await playerService.getActivePlayers();
    if (!playerResults.success) {
        return res.status(400).send('Error getting players');
    }
    return res.status(200).send(playerResults);
};

exports.getPlayersByTeam = async (req, res) => {
    const teamId = req.params.teamId;
    const playerService = new PlayerService();
    const playerResults = await playerService.getPlayersByTeam(teamId);
    if (!playerResults.success) {
        return res.status(400).send('Error getting players');
    }
    return res.status(200).send(playerResults);
};
