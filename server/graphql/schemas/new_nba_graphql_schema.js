const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        allPlayers: [Player],
        allActivePlayers: [Player],
        allPlayersByTeam(teamid: Int!): [Player],
        allTeams: [Team]
    },
    type Player {
        name: String,
        jerseyNumber: Int,
        tid: Int,
        ratings: [PlayerRating],
        pos: String,
        born: String,
        imgURL: String,
        contract: String,
        transactions: [PlayerTransaction],
        draft: PlayerDraft,
        college: String,
        hgt: Int,
        weight: Int,
        awards: [PlayerAward]
    },
    type Team {
        tid: Int,
        region: String,
        name: String,
        abbrev: String,
        pop: Float,
        strategy: String,
        stadiumCapacity: Int,
        colors: [String],
        imgURL: String,
        imgURLSmall: String
    },
    type PlayerRating {
        dnk: Int,
        hgt: Int,
        stre: Int,
        spd: Int, 
        jmp: Int,
        endu: Int,
        ins: Int,
        ft: Int,
        fg: Int,
        tp: Int,
        diq: Int,
        oiq: Int,
        drb: Int,
        pss: Int,
        reb: Int
    },
    type PlayerDraft {
        round: Int,
        pick: Int,
        tid: Int,
        originalTid: Int,
        year: Int
    },
    type PlayerTransaction {
        phase: Int,
        season: Int,
        tid: Int,
        type: String,
        pickNum: Int
    }
    type PlayerAward {
        season: Int,
        type: String
    }
`);

module.exports = schema;
