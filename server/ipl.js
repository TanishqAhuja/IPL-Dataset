//Question 1: Number of matches played per year for all the years in IPL
function matchesPlayed(matches) {
  var matchesPerYear = {};
    matches.forEach(match => {
      matchesPerYear[match.season] = matchesPerYear[match.season]
        ? ++matchesPerYear[match.season]
        : 1;
    });

  console.log("Matches Played per Year:\n", matchesPerYear);
}

module.exports = {
  matchesPlayed: matchesPlayed
};
