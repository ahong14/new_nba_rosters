const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * {"tid":5,
"name":"Evan Mobley",
"jerseyNumber":"4",
"ratings":[{"hgt":67,"stre":40,"spd":53,"jmp":60,"endu":63,"ins":72,"dnk":71,"ft":45,"fg":59,"tp":42,"diq":40,"oiq":65,"drb":47,"pss":54,"reb":72}],
"pos":"C","hgt":83,"weight":215,
"born":{"year":2001,"loc":"San Diego, CA"},
"imgURL":"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1630596.png",
"contract":{"amount":8075,"exp":2025,"rookie":true},
"transactions":[{"phase":0,"season":2021,"tid":5,"type":"draft","pickNum":3}],
"draft":{"round":1,"pick":3,"tid":5,"originalTid":5,"year":2021},
"college":"USC",
"relatives":[{"type":"brother","pid":6,"name":"Isaiah Mobley"}],
"injury":{"type":"Healthy","gamesRemaining":0}},
 */


const NbaPlayer = new Schema({
    name: String,
    jerserNumber: Number,
    tid: Number,
    ratings: Array,
    pos: String,
    born: Schema.Types.Mixed,
    imgURL: String,
    contract: Schema.Types.Mixed,
    transactions: Array,
    draft: Schema.Types.Mixed,
    college: String
});

module.exports = mongoose.model("nbaplayers", NbaPlayer);