const PlayerService = require('../../services/PlayerService');
const TeamsService = require('../../services/TeamsService');
const ElasticsearchService = require('../../services/ElasticsearchService');

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

const getActivePlayersByTeam = async (args) => {
    const playerService = new PlayerService();
    const playerResults = await playerService.getPlayersByTeam(args.teamid);
    return playerResults.results || [];
};

const getAllTeams = async () => {
    const teamsService = new TeamsService();
    const teamsResults = await teamsService.getAllTeams();
    return teamsResults.results || [];
};

const getSearchResults = async (args) => {
    const elasticsearchService = new ElasticsearchService();
    const searchResults = await elasticsearchService.queryElasticSearch(
        JSON.parse(args.query),
        args.from
    );
    return searchResults || [];
};

// map graphql query resolvers to methods
const root = {
    allPlayers: getAllPlayers,
    allActivePlayers: getAllActivePlayers,
    allPlayersByTeam: getActivePlayersByTeam,
    allTeams: getAllTeams,
    querySearch: getSearchResults
};

module.exports = root;
