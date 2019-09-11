const ipl = require("../ipl");
const fs = require("fs");
// const path = require('path');

//for node filepath => ./__filename
var matches4test = JSON.parse(
  fs.readFileSync("./server/test/sampleMatches.json")
);
var deliveries4test = JSON.parse(
  fs.readFileSync("./server/test/sampleDeliveries.json")
);

//Question 1: Number of matches played per year for all the years in IPL
describe("\n\n\nTests for Question 1\n", () => {
  test("Function Exists", () => {
    expect(ipl.matchesPlayed).toBeDefined();
  });
  test("Returns Empty on Empty Input", () => {
    expect(ipl.matchesPlayed([])).toEqual({});
  });
  test("Sample Test Cases Pass", () => {
    expect(ipl.matchesPlayed(matches4test)).toEqual({
      "2014": 1,
      "2015": 3,
      "2016": 4,
      "2017": 2
    });
  });
});

//Question 2: Number of matches won of per team per year in IPL
describe("\n\n\nTests for Question 2\n", () => {
  test("Function Exists", () => {
    expect(ipl.perTeamWins).toBeDefined();
  });
  test("Returns Empty on Empty Input", () => {
    expect(ipl.perTeamWins([])).toEqual({});
  });
  test("Sample Test Cases Pass", () => {
    expect(ipl.perTeamWins(matches4test)).toEqual({
      "team A": { "2014": 0, "2015": 2, "2016": 2, "2017": 1 },
      "team B": { "2014": 1, "2015": 1, "2016": 2, "2017": 1 }
    });
  });
});

//Question 3: Extra runs conceded per team in 2016
describe("\n\n\nTests for Question 3\n", () => {
  test("Function Exists", () => {
    expect(ipl.extras).toBeDefined();
  });
  test("Returns Empty on Empty Input", () => {
    expect(ipl.extras([], [], "")).toEqual({});
  });
  test("Sample Test Cases Pass", () => {
    expect(ipl.extras(matches4test, deliveries4test, "2016")).toEqual({
      "team A": 3,
      "team B": 8
    });
  });
});

// Question 4: Top 10 economical bowlers in 2015
describe("\n\n\nTests for Question 4\n", () => {
  test("Function Exists", () => {
    expect(ipl.top10BowlersbyEconomy).toBeDefined();
  });
  test("Returns Empty on Empty Input", () => {
    expect(ipl.top10BowlersbyEconomy([], [], "")).toEqual({});
  });
  test("Sample Test Cases Pass", () => {
    expect(
      ipl.top10BowlersbyEconomy(matches4test, deliveries4test, "2015")
    ).toEqual({ Naruto: 21, Goku: 24 });
  });
});

// console.log(ipl.matchesPlayed(matches4test));
// console.log(ipl.perTeamWins(matches4test));
// console.log(ipl.extras(matches4test, deliveries4test, "2016"));
// console.log(ipl.top10BowlersbyEconomy(matches4test, deliveries4test, "2015"));
