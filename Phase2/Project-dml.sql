-- What team has the best record in their league?
SELECT
    teams_name,
    team_wins, 
    team_losses, 
    team_ties,
    MAX(team_win_percent) 
FROM
    team
GROUP BY
    teams_name limit 1;


-- Which player leads their team in goals?


-- List all of the teams in alphabetical order
select
    teams_name
from
    team
order by
    teams_name;


-- Which player has the most goals in ocean dwellers league?
WITH sub_table1 as (
    SELECT
        *
    FROM   
        player left join player_stats on (ID = player_ID)
), 
sub_table2 as (
    SELECT
        * 
    FROM 
        team as A left join league as B on (A.teams_name = B.league_team_name)
),
sub_table3 as (
    SELECT  
        league_name,
        teams_name,
        first_name as 1st_name,
        last_name as 2nd_name,
        MAX(goals) as Top_Goals
    FROM
        sub_table1 left join sub_table2 on (sub_table1.team_name = sub_table2.teams_name)
    WHERE
        league_name = "Ocean Dwellers"
    GROUP by
        teams_name, league_name, first_name, last_name
)
SELECT
    MAX(sub_table3.Top_Goals) as uses, 
    sub_table3.1st_name,
    sub_table3.2nd_name,
    league_name
FROM
    sub_table3
GROUP BY
    sub_table3.1st_name,
    sub_table3.2nd_name
ORDER BY
    uses desc limit 1
    

-- 5. What teams played on 10/29/2022? 
select
    games_team_name,
    opponent
from
    games
WHERE   
    games_date = "2022-10-29"


-- 6. Which teams will have 5 games remaining after mm/dd/yyyy?


-- 7. How many times did Team A play Team B this year?
with sub_table4 as (
    select  
        games_team_name, 
        opponent, 
        games_date
    from
        games
    where
        games_team_name = "Sharks" AND opponent = "Jags" OR games_team_name = "Jags" AND opponent = "Sharks"
)
select
    count(games_date) as Times_Played
from 
    sub_table4


-- 8.	What player has the jersey number 13?
select 
    first_name, 
    last_name
from 
    player
where 
    jersey_number = "13"


-- 9.	What teams are not in the same league as team Straw Hats?
SELECT
    league_team_name
from 
    league
where
    league_name != "Ocean Dwellers"


-- 10.	What teams are under .5 win rate?
SELECT
    teams_name
from 
    team
where
    team_win_percent < 50


-- 11.	What teams have the same exact record?
#select
#    #teams_name, 
#    team_wins, 
#    team_losses,
#    team_ties, 
#    count(*) as B 
#from 
#    team
#group by
#    team_wins,
#    team_losses, 
#    team_ties
#having
#    count(*) > 1 
#order by desc
#
#where 

