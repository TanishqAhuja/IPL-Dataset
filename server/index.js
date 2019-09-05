const fs = require("fs");
const c2j = require("csvtojson");

//converting to json
c2j().fromFile("../input/deliveries.csv").then(jsonObj => {
    var jsonStr = JSON.stringify(jsonObj);
    fs.writeFileSync("../input/parsed/deliveries.json", jsonStr);
});
c2j().fromFile("../input/matches.csv").then(jsonObj => {
    var jsonStr = JSON.stringify(jsonObj);
    fs.writeFileSync("../input/parsed/matches.json", jsonStr);
});

//reading json data
var content1 = fs.readFileSync("../input/parsed/matches.json");
var content2 = fs.readFileSync("../input/parsed/deliveries.json");
var matches = JSON.parse(content1);
var deliveries = JSON.parse(content2);

