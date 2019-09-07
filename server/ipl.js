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
        if (wTeam != '') {
            if (!matchesWon[year]) {
                matchesWon[year] = {};
                matchesWon[year][wTeam] = 1;
            } else matchesWon[year][wTeam] = (matchesWon[year][wTeam] || 0) + 1;
        }
        return matchesWon;
    }, {});
}

function idUtil(matches, deliveries, year) {
    return deliveries
        .filter(delivery => matches
                .filter(match => match.season === year)
                .map(match => match.id)
                .includes(delivery.match_id)
        )
}


//Question 3: Extra runs conceded per team in 2016
function extras(matches, deliveries, year) {
    return idUtil(matches, deliveries, year)
        .reduce((extraRuns, delivery) => {
            extraRuns[delivery.bowling_team] =
                (extraRuns[delivery.bowling_team] || 0) + parseInt(delivery.extra_runs);
            return extraRuns;
        }, {});
}

// Question 4: Top 10 economical bowlers in 2015
function top10BowlersbyEconomy(matches, deliveries, year) {
    return Object.entries(
        idUtil(matches, deliveries, year)
            .reduce((bowlingStats, delivery) => {
                let name = delivery.bowler;
                let totalRuns =
                    parseInt(delivery.total_runs) -
                    parseInt(delivery.bye_runs) -
                    parseInt(delivery.legbye_runs);
                bowlingStats[name] = bowlingStats[name] || {};
                bowlingStats[name]["runsConceded"] =
                    (bowlingStats[name]["runsConceded"] || 0) + totalRuns;
                if (delivery.wide_runs == "0" && delivery.noball_runs == "0") {
                    bowlingStats[name]["ballsBowled"] =
                        (bowlingStats[name]["ballsBowled"] || 0) + 1;
                }
                return bowlingStats;
            }, {})
    )
        .map(stat => {
            stat[1]["overs"] = stat[1].ballsBowled / 6;
            stat[1]["economy"] = stat[1].runsConceded / stat[1].overs;
            return stat;
        })
        .sort((a, b) => a[1]["economy"] - b[1]["economy"])
        .slice(0, 10)
        .reduce((finalStats, stat) => {
            var statObj = {};
            statObj["name"] = stat[0];
            statObj["economy"] = stat[1]["economy"];
            finalStats.push(statObj);
            return finalStats;
        }, [])
}


module.exports = {
    matchesPlayed: matchesPlayed,
    perTeamWins: perTeamWins,
    extras: extras,
    top10BowlersbyEconomy: top10BowlersbyEconomy
};
