const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * {"tid":14,"cid":1,"did":3,
"region":"Memphis","name":"Grizzlies","abbrev":"MEM","pop":1.3,"strategy":"rebuilding",
"stadiumCapacity":18119,
"colors":["#5D76A9","#12173F","#F5B112"],"jersey":"jersey2",
"retiredJerseyNumbers":[
{"number":"9","seasonRetired":2022,"seasonTeamInfo":2022,"text":"Tony Allen"},
{"number":"50","seasonRetired":2022,"seasonTeamInfo":2022,"text":"Zach Randolph"}],
"imgURL":"https://i.imgur.com/8A1a3zw.png",
"imgURLSmall":"https://i.imgur.com/mRTBrVV.png"}
 */

 const NbaTeam = new Schema({
     tid: Number,
     region: String,
     name: String,
     abbrev: String,
     pop: Number,
     strategy: String,
     stadiumCapacity: Number,
     colors: Array,
     imgURL: String,
     imgURLSmall: String
 });

 module.exports = mongoose.model("nbateams", NbaTeam);