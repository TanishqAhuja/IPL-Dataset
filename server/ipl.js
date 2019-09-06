//Question 1: Number of matches played per year for all the years in IPL
function matchesPlayed(matches) {
  return matches.reduce((matchesPerYear, match) => {
    matchesPerYear[match.season] = (matchesPerYear[match.season] || 0) + 1;
    return matchesPerYear;
  }, {});
}

//Question 2: Number of matches won of per team per year in IPL
function perTeamWins(matches) {
    var matchesWon = {};
    matches.forEach(match => {
    var year = match.season;
    var wTeam = match.winner;
    if (matchesWon[year] === undefined) {
      matchesWon[year] = {};
      matchesWon[year][wTeam] = 1;
    } else
      matchesWon[year][wTeam] = matchesWon[year][wTeam]
        ? ++matchesWon[year][wTeam]
        : 1;
  });
  return matchesWon;
}

module.exports = {
  matchesPlayed: matchesPlayed,
  perTeamWins : perTeamWins
};
