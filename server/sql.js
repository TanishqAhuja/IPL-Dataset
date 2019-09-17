const Client = require('pg').Client;
const client = new Client({
    user: 'mountblue',
    host: 'ipl-1.c3xodypxb4ts.ap-south-1.rds.amazonaws.com',
    database: 'ipl',
    password: 'mountblue!011q2w',
    port: 5432
});

client.connect()
    .then(() => console.log("Connected SuccessFully!!"))
    .then(() => client.query("select season, count(season) as TotalMatches from matches group by season"))
    .then((response) => {
        console.log('\n\n\nNumber of Matches Played per Year:');
        console.table(response.rows);
    })
    .then(() => client.query("select winner as Teams, season, count(winner) as MatchesWon\
    from matches where winner is not null group by (winner, season) order by (winner, season)"))
    .then((response) => {
        console.log('\n\n\nNumber of Matches Won per Team per Year:');
        console.table(response.rows);
    })
    .then(() => client.query("select bowling_team as Teams, sum(extra_runs) as ExtraRuns\
    from deliveries where match_id in (select id from matches where season = '2016')\
    group by bowling_team order by ExtraRuns"))
    .then((response) => {
        console.log('\n\n\nExtra Runs Conceded per Team in 2016:');
        console.table(response.rows);
    })
    .then(() => client.query("select  bowler,\
    cast(cast(sum(total_runs-(bye_runs+legbye_runs)) as decimal(10,2))\
    /cast(cast(count(case when wide_runs=0 and noball_runs=0 then 1 else null end) as decimal(10,2))\
    /6.00 as decimal(10,2)) as decimal(10,2)) as economy from deliveries\
    where match_id in (select id from matches where season = '2015')\
    group by bowler order by economy limit 10"))
    .then((response) => {
        console.log('\n\n\nTop 10 Economical Bowlers of 2015:');
        console.table(response.rows);
    })
    .catch(err => console.log(err))
    .finally(() => client.end());