//Question 1: Number of matches played per year for all the years in IPL
function matchesPlayed(matches) {
    return matches.reduce((matchesPerYear, match) => {
        matchesPerYear[match.season] = (matchesPerYear[match.season] || 0) + 1;
        return matchesPerYear;
    }, {});
}

//Question 2: Number of matches won of per team per year in IPL
function perTeamWins(matches) {
    return matches.reduce((matchesWon, match) => {
        var year = match.season;
        var wTeam = match.winner;
        if (!matchesWon[year]) {
            matchesWon[year] = {};
            matchesWon[year][wTeam] = 1;
        } else matchesWon[year][wTeam] = (matchesWon[year][wTeam] || 0) + 1;
        return matchesWon;
    }, {});
}

//Question 3: Extra runs conceded per team in 2016
function extras(matches, deliveries) {
    var extraRuns = {};
    var maxId = -Infinity;
    var minId = Infinity;
    matches.forEach(match => {
        if (match.season === "2016") {
            let id = parseInt(match.id);
            if (id > maxId) maxId = id;
            if (id < minId) minId = id;
        }
    });
    deliveries.forEach(delivery => {
        let id = parseInt(delivery.match_id);
        if (id <= maxId && id >= minId) {
            if (extraRuns[delivery.bowling_team] === undefined)
                extraRuns[delivery.bowling_team] = parseInt(delivery.extra_runs);
            else extraRuns[delivery.bowling_team] += parseInt(delivery.extra_runs);
        }
    });
    return extraRuns;
}

module.exports = {
    matchesPlayed: matchesPlayed,
    perTeamWins: perTeamWins,
    extras: extras
};
