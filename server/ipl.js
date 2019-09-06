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
    return deliveries
        .filter(delivery =>
            matches
                .filter(match => match.season === "2016")
                .map(match => match.id)
                .includes(delivery.match_id)
        )
        .reduce((extraRuns, delivery) => {
            extraRuns[delivery.bowling_team] =
                (extraRuns[delivery.bowling_team] || 0) + parseInt(delivery.extra_runs);
            return extraRuns;
        }, {});
}

// Question 4: Top 10 economical bowlers in 2015
function bowlersEconomy(matches, deliveries) {
    var bowlers = {};
    var maxId = -Infinity;
    var minId = Infinity;
    matches.forEach(match => {
        if (match.season === "2015") {
            let id = parseInt(match.id);
            if (id > maxId) maxId = id;
            if (id < minId) minId = id;
        }
    });
    deliveries.forEach(delivery => {
        let id = parseInt(delivery.match_id);
        let name = delivery.bowler;
        let totalRuns =
            parseInt(delivery.total_runs) -
            parseInt(delivery.bye_runs) -
            parseInt(delivery.legbye_runs);
        if (id <= maxId && id >= minId) {
            if (bowlers[name] === undefined) {
                bowlers[name] = {};
                bowlers[name]["runs"] = totalRuns;
                if (delivery.wide_runs == "0" && delivery.noball_runs == "0")
                    bowlers[name]["balls"] = 1;
                else bowlers[name]["balls"] = 0;
            } else {
                bowlers[name]["runs"] += totalRuns;
                if (delivery.wide_runs == "0" && delivery.noball_runs == "0")
                    bowlers[name]["balls"]++;
            }
        }
    });
    for (bowler in bowlers) {
        bowlers[bowler]["overs"] = bowlers[bowler].balls / 6;
        bowlers[bowler]["economy"] = bowlers[bowler].runs / bowlers[bowler].overs;
    }
    var sortable = Object.entries(bowlers).sort(
        (a, b) => a[1]["economy"] - b[1]["economy"]
    );
    for (var i = 0; i < 10; i++) {
        console.log(sortable[i][0] + ": " + sortable[i][1]["economy"]);
    }
}



module.exports = {
    matchesPlayed: matchesPlayed,
    perTeamWins: perTeamWins,
    extras: extras,
    top10BowlersbyEconomy: bowlersEconomy
};
