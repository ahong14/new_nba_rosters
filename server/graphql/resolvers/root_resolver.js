const PlayerService = require('../../services/PlayerService');
const TeamsService = require('../../services/TeamsService');

const getAllPlayers = async () => {
    const playerService = new PlayerService();
    const playerResults = await playerService.getAllPlayers();
    return playerResults.results || [];
};

const getAllActivePlayers = async () => {
    const playerService = new PlayerService();
    const playerResults = await playerService.getActivePlayers();
    return playerResults.results || [];
};

const getActivePlayersByTeam = async args => {
    const playerService = new PlayerService();
    const playerResults = await playerService.getPlayersByTeam(args.teamid);
    return playerResults.results || [];
};

const getAllTeams = async () => {
    const teamsService = new TeamsService();
    const teamsResults = await teamsService.getAllTeams();
    return teamsResults.results || [];
};

// map graphql query resolvers to methods
const root = {
    allPlayers: getAllPlayers,
    allActivePlayers: getAllActivePlayers,
    allPlayersByTeam: getActivePlayersByTeam,
    allTeams: getAllTeams
};

module.exports = root;
