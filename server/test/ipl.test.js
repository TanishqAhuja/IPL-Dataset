jest.mock('fs');
const ipl = require("../ipl");
const fs = require("fs");

// var matches4test = JSON.parse(fs.readFileSync("./sampleMatches.json"));
// var deliveries4test = JSON.parse(fs.readFileSync("./sampleDeliveries.json"));


var matches4test = 
[
    {
        "id": "1",
        "season": "2017",
        "winner": "team A"
    },
    {
        "id": "2",
        "season": "2017",
        "winner": "team B"
    },
    {
        "id": "3",
        "season": "2016",
        "winner": "team A"
    },
    {
        "id": "4",
        "season": "2016",
        "winner": "team B"
    },
    {
        "id": "5",
        "season": "2016",
        "winner": "team B"
    },
    {
        "id": "6",
        "season": "2016",
        "winner": "team A"
    },
    {
        "id": "7",
        "season": "2015",
        "winner": "team A"
    },
    {
        "id": "8",
        "season": "2015",
        "winner": "team B"
    },
    {
        "id": "9",
        "season": "2015",
        "winner": "team A"
    },
    {
        "id": "10",
        "season": "2014",
        "winner": "team B"
    }
];

var deliveries4test = 
[
    {
        "match_id": "1",
        "bowling_team": "team A",
        "bowler": "Naruto",
        "wide_runs": "0",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "0",
        "extra_runs": "0",
        "total_runs": "4"
    },
    {
        "match_id": "1",
        "bowling_team": "team B",
        "bowler": "Goku",
        "wide_runs": "1",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "0",
        "extra_runs": "1",
        "total_runs": "1"
    },
    {
        "match_id": "2",
        "bowling_team": "team A",
        "bowler": "Naruto",
        "wide_runs": "0",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "0",
        "extra_runs": "0",
        "total_runs": "2"
    },
    {
        "match_id": "2",
        "bowling_team": "team B",
        "bowler": "Goku",
        "wide_runs": "0",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "0",
        "extra_runs": "0",
        "total_runs": "6"
    },
    {
        "match_id": "3",
        "bowling_team": "team A",
        "bowler": "Naruto",
        "wide_runs": "0",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "0",
        "extra_runs": "0",
        "total_runs": "2"
    },
    {
        "match_id": "3",
        "bowling_team": "team B",
        "bowler": "Goku",
        "wide_runs": "0",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "1",
        "extra_runs": "0",
        "total_runs": "5"
    },
    {
        "match_id": "4",
        "bowling_team": "team A",
        "bowler": "Naruto",
        "wide_runs": "1",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "0",
        "extra_runs": "2",
        "total_runs": "2"
    },
    {
        "match_id": "4",
        "bowling_team": "team B",
        "bowler": "Goku",
        "wide_runs": "0",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "0",
        "extra_runs": "3",
        "total_runs": "3"
    },
    {
        "match_id": "5",
        "bowling_team": "team A",
        "bowler": "Naruto",
        "wide_runs": "1",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "0",
        "extra_runs": "1",
        "total_runs": "1"
    },
    {
        "match_id": "5",
        "bowling_team": "team B",
        "bowler": "Goku",
        "wide_runs": "0",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "0",
        "extra_runs": "4",
        "total_runs": "4"
    },
    {
        "match_id": "6",
        "bowling_team": "team A",
        "bowler": "Naruto",
        "wide_runs": "0",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "0",
        "extra_runs": "0",
        "total_runs": "3"
    },
    {
        "match_id": "6",
        "bowling_team": "team B",
        "bowler": "Goku",
        "wide_runs": "1",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "0",
        "extra_runs": "1",
        "total_runs": "1"
    },
    {
        "match_id": "7",
        "bowling_team": "team A",
        "bowler": "Naruto",
        "wide_runs": "0",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "0",
        "extra_runs": "0",
        "total_runs": "2"
    },
    {
        "match_id": "7",
        "bowling_team": "team B",
        "bowler": "Goku",
        "wide_runs": "0",
        "bye_runs": "1",
        "legbye_runs": "0",
        "noball_runs": "0",
        "extra_runs": "0",
        "total_runs": "1"
    },
    {
        "match_id": "8",
        "bowling_team": "team A",
        "bowler": "Naruto",
        "wide_runs": "0",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "1",
        "extra_runs": "1",
        "total_runs": "4"
    },
    {
        "match_id": "8",
        "bowling_team": "team B",
        "bowler": "Goku",
        "wide_runs": "1",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "0",
        "extra_runs": "0",
        "total_runs": "2"
    },
    {
        "match_id": "9",
        "bowling_team": "team A",
        "bowler": "Naruto",
        "wide_runs": "0",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "0",
        "extra_runs": "0",
        "total_runs": "1"
    },
    {
        "match_id": "9",
        "bowling_team": "team B",
        "bowler": "Goku",
        "wide_runs": "0",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "1",
        "extra_runs": "0",
        "total_runs": "2"
    },
    {
        "match_id": "10",
        "bowling_team": "team A",
        "bowler": "Naruto",
        "wide_runs": "0",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "1",
        "extra_runs": "0",
        "total_runs": "7"
    },
    {
        "match_id": "10",
        "bowling_team": "team B",
        "bowler": "Goku",
        "wide_runs": "0",
        "bye_runs": "0",
        "legbye_runs": "0",
        "noball_runs": "1",
        "extra_runs": "0",
        "total_runs": "2"
    }
];

//Question 1: Number of matches played per year for all the years in IPL
describe("\n\n\nTests for Question 1\n", () => {
    test("Function Exists", () => {
        expect(ipl.matchesPlayed).toBeDefined();
    });
    test("Returns Empty on Empty Input", () => {
        expect(ipl.matchesPlayed([])).toEqual({});
    });
    test("Sample Test Case", () => {
        expect(ipl.matchesPlayed(matches4test)).toEqual(
            { '2014': 1, '2015': 3, '2016': 4, '2017': 2 }
        );
    });
})

//Question 2: Number of matches won of per team per year in IPL
describe("\n\n\nTests for Question 2\n", () => {
    test("Function Exists", () => {
        expect(ipl.perTeamWins).toBeDefined();
    });
    test("Returns Empty on Empty Input", () => {
        expect(ipl.perTeamWins([])).toEqual({});
    });
    test("Sample Test Case", () => {
        expect(ipl.perTeamWins(matches4test)).toEqual({
            '2014': { 'team B': 1 },
            '2015': { 'team A': 2, 'team B': 1 },
            '2016': { 'team A': 2, 'team B': 2 },
            '2017': { 'team A': 1, 'team B': 1 }
        });
    });
})

//Question 3: Extra runs conceded per team in 2016
describe("\n\n\nTests for Question 3\n", () => {
    test("Function Exists", () => {
        expect(ipl.extras).toBeDefined();
    });
    test("Returns Empty on Empty Input", () => {
        expect(ipl.extras([], [], "")).toEqual({});
    });
    test("Sample Test Case", () => {
        expect(ipl.extras(matches4test, deliveries4test, "2016")).toEqual({ 'team A': 3, 'team B': 8 });
    });
})

// Question 4: Top 10 economical bowlers in 2015
describe("\n\n\nTests for Question 4\n", () => {
    test("Function Exists", () => {
        expect(ipl.top10BowlersbyEconomy).toBeDefined();
    });
    test("Returns Empty on Empty Input", () => {
        expect(ipl.top10BowlersbyEconomy([], [], "")).toEqual([]);
    });
    test("Sample Test Case", () => {
        expect(ipl.top10BowlersbyEconomy(matches4test, deliveries4test, "2015")).toEqual(
            [{ name: 'Naruto', economy: 21 },
            { name: 'Goku', economy: 24 }]
        );
    });
})

// console.log(ipl.matchesPlayed(matches4test));
// console.log(ipl.perTeamWins(matches4test));
// console.log(ipl.extras(matches4test, deliveries4test, "2016"));
// console.log(ipl.top10BowlersbyEconomy(matches4test, deliveries4test, "2015"));