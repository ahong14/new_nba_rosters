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
"stats":[
    {"playoffs":false,"yearsWithTeam":1,"season":2020,"jerseyNumber":"11","tid":3,"gp":48,"gs":3,"min":903,"fg":89,"fga":207,"tp":18,"tpa":77,"ft":42,"fta":65,"orb":38,"drb":120,"ba":10,"ast":95,"stl":39,"blk":9,"tov":44,"pf":78,"pts":238,"pm":-69,"per":10.5,"ortg":104,"drtg":112,"orbp":4.4,"drbp":15.1,"trbp":9.6,"astp":15.7,"stlp":2.2,"blkp":0.9,"usgp":13.6,"ows":0.2,"dws":0.8,"obpm":-3.1,"dbpm":1,"vorp":0,"ewa":0,"dd":0,"td":0,"minMax":[36],"fgMax":[6],"fgaMax":[12],"tpMax":[2],"tpaMax":[5],"2pMax":[5],"2paMax":[8],"ftMax":[4],"ftaMax":[6],"orbMax":[4],"drbMax":[9],"trbMax":[11],"astMax":[9],"stlMax":[3],"blkMax":[1],"tovMax":[4],"pfMax":[4],"ptsMax":[13],"gmscMax":[19.1],"pmMax":[27]},
    {"playoffs":false,"yearsWithTeam":2,"season":2021,"jerseyNumber":"11","tid":3,"gp":52,"gs":10,"min":849,"fg":83,"fga":188,"tp":16,"tpa":58,"ft":25,"fta":43,"orb":52,"drb":109,"ba":16,"ast":86,"stl":37,"blk":12,"tov":40,"pf":52,"pts":207,"pm":-4,"per":10.6,"ortg":107,"drtg":113,"orbp":6.5,"drbp":14.1,"trbp":10.3,"astp":13.9,"stlp":2.1,"blkp":1.4,"usgp":12.5,"ows":0.2,"dws":0.9,"obpm":-2.6,"dbpm":0.3,"vorp":-0.1,"ewa":0,"dd":1,"td":0,"minMax":[38],"fgMax":[5],"fgaMax":[12],"tpMax":[1],"tpaMax":[3],"2pMax":[4],"2paMax":[9],"ftMax":[2],"ftaMax":[4],"orbMax":[5],"drbMax":[9],"trbMax":[10],"astMax":[7],"stlMax":[4],"blkMax":[3],"tovMax":[3],"pfMax":[3],"ptsMax":[13],"gmscMax":[16.6],"pmMax":[29]}]
"injury":{"type":"Healthy","gamesRemaining":0}},
 */

const NbaPlayer = new Schema({
    name: String,
    jerseyNumber: Number,
    tid: Number,
    ratings: Array,
    pos: String,
    born: Schema.Types.Mixed,
    imgURL: String,
    contract: Schema.Types.Mixed,
    transactions: Array,
    draft: Schema.Types.Mixed,
    college: String,
    stats: Array
});

module.exports = mongoose.model('nbaplayers', NbaPlayer);
