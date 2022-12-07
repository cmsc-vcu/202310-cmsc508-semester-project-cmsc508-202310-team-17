-- 1. What team has the best record in their league?
SELECT
    teams_name,
    team_wins, 
    team_losses, 
    team_ties,
    MAX(team_win_percent) AS Win_Percentage
FROM
    team
GROUP BY
    teams_name 
ORDER BY
    Win_Percentage DESC LIMIT 1; 


-- 2. What are the leading goal scorers' amounts for each team?
SELECT
    MAX(goals) AS Top_Amount,
    team_name
FROM
    player JOIN player_stats ON (ID = player_ID)
GROUP BY
    team_name
ORDER BY 
    MAX(goals) DESC;


-- 3. List all of the teams in alphabetical order
SELECT
    teams_name
FROM
    team
ORDER BY
    teams_name;


-- 4. Which player has the most goals in ocean dwellers league?
WITH sub_table1 AS (
    SELECT
        *
    FROM   
        player LEFT JOIN player_stats ON (ID = player_ID)
), 
sub_table2 AS (
    SELECT
        * 
    FROM 
        team AS A LEFT JOIN league AS B ON (A.teams_name = B.league_team_name)
),
sub_table3 AS (
    SELECT  
        league_name,
        teams_name,
        first_name AS 1st_name,
        last_name AS 2nd_name,
        MAX(goals) AS Top_Goals
    FROM
        sub_table1 LEFT JOIN sub_table2 ON (sub_table1.team_name = sub_table2.teams_name)
    WHERE
        league_name = "Ocean Dwellers"
    GROUP BY
        teams_name, league_name, first_name, last_name
)
SELECT
    MAX(sub_table3.Top_Goals) AS Top_Goals, 
    sub_table3.1st_name,
    sub_table3.2nd_name,
    league_name
FROM
    sub_table3
GROUP BY
    sub_table3.1st_name,
    sub_table3.2nd_name
ORDER BY
    Top_Goals DESC LIMIT 1;


-- 5. What teams played on 10/29/2022? 
SELECT
    games_team_name,
    opponent,
    games_date
FROM
    games
WHERE   
    games_date = "2022-10-29";


-- 6. Which teams played after 10/13/2022?
SELECT 
    games_team_name,
    opponent, 
    games_date
FROM
    games
WHERE
    games_date > '2022-10-13';


-- 7. How many times did the Sharks play the Jags this year?
WITH sub_table4 AS (
    SELECT  
        games_team_name, 
        opponent, 
        games_date
    FROM
        games
    WHERE
        games_team_name = "Sharks" AND opponent = "Jags" OR games_team_name = "Jags" AND opponent = "Sharks"
)
SELECT
    COUNT(games_date) AS Times_Played
FROM 
    sub_table4;


-- 8.	What player has the jersey number 13?
SELECT 
    first_name, 
    last_name
FROM
    player
WHERE 
    jersey_number = "13";


-- 9.	What teams are not in the same league as team Straw Hats?
SELECT
    league_team_name
FROM
    league
WHERE
    league_name != "Ocean Dwellers";


-- 10.	What teams are under .5 win rate?
SELECT
    teams_name,
    team_win_percent
FROM 
    team
WHERE
    team_win_percent < 50;


-- 11.	What teams have the same exact record?
WITH sub_table5 AS (
    SELECT
        team_wins, 
        team_losses,
        team_ties,
        COUNT(*)
    FROM
        team
    GROUP BY
        team_wins, 
        team_losses, 
        team_ties
    HAVING COUNT(*) > 1
)
SELECT
    teams_name
FROM
    team
WHERE
    team_wins = 3 AND team_losses = 3 AND team_ties = 1;


--12.	What team has the most RW (position) players?
WITH sub_table6 AS (
    SELECT
        team_name,
        position,
        COUNT("*") AS Numbers
    FROM
        player
    WHERE
        position = "RW"
    GROUP BY 
        position, 
        team_name
),
sub_table7 AS (
    SELECT
        MAX(Numbers) AS Maxs
    FROM
        sub_table6
)
SELECT 
    team_name, 
    Numbers
FROM 
    sub_table7
    JOIN sub_table6 ON (Maxs = Numbers);


--13.	How many games had more than 5 total goals scored?
SELECT
    COUNT(*)  
FROM
    games
WHERE
    home_goals + away_goals > 5;


--14.	Do player A and Player B play the same position?
SELECT
    first_name,
    position
FROM
    player
WHERE
    first_name = "Zoro" OR first_name = "Sanji";


--15.	What league has the largest number of teams?
WITH sub_table8 AS (
    SELECT
        league_name,
        COUNT(league_name) AS number_of
    FROM
        league
    GROUP BY
        league_name
),
sub_table9 AS(
    SELECT
        MAX(number_of) AS maxs
    FROM 
        sub_table8
)
SELECT
    league_name
FROM
    sub_table9
    JOIN sub_table8 ON (maxs = number_of);


-- 16.	What team is "Luffy D Monkey" on?
SELECT
    team_name
FROM
    player
WHERE
    first_name = "Luffy" AND last_name = "D Monkey"


--17.	What teams played during the week of 10/02/2022?
SELECT
    games_team_name,
    opponent,
    games_date
FROM
    games
WHERE 
    games_date = '2022-10-2' OR games_date = '2022-10-3' OR games_date = '2022-10-4' OR  
    games_date = '2022-10-5' OR games_date = '2022-10-6' OR games_date = '2022-10-7' OR
    games_date = '2022-10-8'
ORDER BY
    games_date; 


-- 18.	What two teams played in the most recent game?
WITH sub_table11 AS(
    SELECT
        MAX(games_date) AS thedate
    FROM
        games
)
SELECT
    games_team_name, 
    opponent,
    thedate
FROM
    games JOIN sub_table11 ON (games_date = thedate);


-- 19.	What team has played the most home games?
SELECT
    COUNT(games_team_name) AS Home_Games,
    games_team_name
FROM
    games
GROUP BY 
    games_team_name
ORDER BY 
    Home_Games DESC LIMIT 1;


--20.	What league had the most saves?
WITH sub_table10 AS ( 
    SELECT
        MAX(saves) AS saves,
        team_name
    FROM
        player JOIN player_stats ON (ID = player_ID)
    GROUP BY
        team_name
    ORDER BY 
        MAX(saves) DESC LIMIT 1
)
SELECT
    league_name,
    saves
FROM
    sub_table10 JOIN league ON (team_name = league_team_name);
