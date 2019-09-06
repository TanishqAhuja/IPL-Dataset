const fs = require("fs");
const c2j = require("csvtojson");
const ipl = require("./ipl");

//converting to json
// c2j()
//     .fromFile("../input/deliveries.csv")
//     .then(jsonObj => {
//         var jsonStr = JSON.stringify(jsonObj);
//         fs.writeFileSync("../input/parsed/deliveries.json", jsonStr);
//     });
// c2j()
//     .fromFile("../input/matches.csv")
//     .then(jsonObj => {
//         var jsonStr = JSON.stringify(jsonObj);
//         fs.writeFileSync("../input/parsed/matches.json", jsonStr);
//     });

//reading json data
var content1 = fs.readFileSync("../input/parsed/matches.json");
var content2 = fs.readFileSync("../input/parsed/deliveries.json");
var matches = JSON.parse(content1);
var deliveries = JSON.parse(content2);

//Question 1: Number of matches played per year for all the years in IPL
console.log("\n\n\nNumber of matches played per year:\n", ipl.matchesPlayed(matches));

//Question 2: Number of matches won of per team per year in IPL
console.log("\n\n\nNumber of matches won of per team per year:\n", ipl.perTeamWins(matches));

//Question 3: Extra runs conceded per team in 2016
console.log("\n\n\nExtra runs conceded per team in 2016:\n", ipl.extras(matches, deliveries));

// Question 4: Top 10 economical bowlers in 2015
console.log("\n\n\nTop 10 economical bowlers in 2015:");
ipl.top10BowlersbyEconomy(matches, deliveries);