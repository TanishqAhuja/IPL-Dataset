//Question 1: Number of matches played per year for all the years in IPL
function matchesPlayed(matches) {
    return matches.reduce((matchesPerYear, match) => {
        matchesPerYear[match.season] = (matchesPerYear[match.season] || 0) + 1;
        return matchesPerYear;
    }, {});
}

module.exports = {
    matchesPlayed: matchesPlayed
};
