drop table if exists games;
drop table if exists league;
drop table if exists player_stats;
drop table if exists player;
drop table if exists team;

create table team(
    team_name varchar(255),
    team_wins int,
    team_losses int,
    team_ties int,
    team_win_percent int,
    primary key(team_name)
)

create table player(
    ID int auto_increment,
    first_name varchar(255),
    last_name varchar(255),
    position varchar(255),
    jersey_number int,
    team_name varchar(255),
    primary key(ID),
    foreign key (team_name) references team(team_name)
)

create table player_stats(
    player_ID int,
    goals int,
    assists int,
    saves int,
    primary key(player_ID),
    foreign key(player_ID) references player(ID)
)

create table league(
    league_name varchar(255),
    team_name varchar(255),
    win_percentage int,
    primary key (league_name, team_name),
    foreign key(team_name) references team(team_name)
)

create table games(
    match_ID int auto_increment,
    games_date date,
    team_name varchar(255),
    home_goals int,
    opponent varchar(255),
    away_goals int,
    primary key(match_ID),
    foreign key(team_name) references team(team_name)
)



insert into team (team_name, team_wins, team_losses, team_ties, team_win_percent) values
    ("Sharks", 5, 2, 0, 71),
    ("Jags", 0, 7, 0, 0),
    ("Hornets", 2, 5, 0, 28),
    ("Straw Hats", 4, 1, 2, 57), 
    ("Books", 6, 0, 1, 86);

insert into player(ID, first_name, last_name, position, jersey_number, team_name) values
    ("Derrick", "Kyereh", "CB", 11, "Sharks"),
    ("Corey", "Long", "LB", 13, "Hornets"),
    ("Taylor", "Joseph", "ST", 5, "Jags"),
    ("John", "Cena", "LW", 9, "Books"),
    ("Zoro", "Roronoa", "RW", 17, "Straw Hats");

insert into player_stats(player_ID, goals, assists, saves) values 
    (1, 5, 2, 0),
    (2, 7, 3, 1),
    (3, 0, 2, 3),
    (4, 1, 4, 2),
    (5, 6, 1, 4);

insert into league(league_name, team_name, win_percentage) values
    ("Ocean Dwellers", "Sharks", 71),
    ("Field Dwellers", "Jags", 0),
    ("Air Dwellers", "Hornets", 28),
    ("Ocean Dwellers", "Straw Hats", 57),
    ("Field Dwellers", "Books", 86);

insert into games(games_date, team_name, home_goals, opponent, away_goals) values
    ('2022-10-29', "Sharks", 5, "Jags", 3),
    ('2022-10-25', "Jags", 2, "Hornets", 4),
    ('2022-10-20', "Hornets", 0, "Straw Hats", 6),
    ('2022-10-15', "Straw Hats", 4, "Books", 2),
    ('2022-10-18', "Books", 5, "Sharks", 7);
