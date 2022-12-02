drop table if exists games;
drop table if exists league;
drop table if exists player_stats;
drop table if exists player;
drop table if exists team;
 
create table team(
    teams_name varchar(255),
    team_wins int,
    team_losses int,
    team_ties int,
    team_win_percent int, 
    primary key(teams_name)
);
 
create table player(
    ID int auto_increment, 
    first_name varchar(255),
    last_name varchar(255),
    position varchar(255),
    jersey_number int,
    team_name varchar(255),
    primary key(ID),
    foreign key (team_name) references team(teams_name)
);

create table player_stats(
    player_ID int,
    goals int,
    assists int,
    saves int,
    primary key(player_ID),
    foreign key(player_ID) references player(ID)
);

create table league(
    league_name varchar(255),
    league_team_name varchar(255),
    win_percentage int,
    primary key (league_name, league_team_name),
    foreign key(league_team_name) references team(teams_name)
);

create table games(
    match_ID int auto_increment,
    games_date date,
    games_team_name varchar(255),
    home_goals int,
    opponent varchar(255),
    away_goals int,
    primary key(match_ID),
    foreign key(games_team_name) references team(teams_name)
);



insert into team (teams_name, team_wins, team_losses, team_ties, team_win_percent) values
    ("Sharks", 2, 4, 1, 71),
    ("Barracudas", 1, 4, 2, 14),
    ("Straw Hats", 7, 0, 0, 100), 
    ("Buggy Pirates", 0, 4, 3, 0),
    ("Donquixote Pirates", 6, 1, 0, 86)

    ("Hornets", 2, 5, 0, 28),
    ("Justice", 3, 3, 1, 43),
    ("Bees", 4, 2, 1, 57),
    ("Hawks", 5, 0, 2, 71),
    ("Bluejays", 3, 4, 1, 43);

    #("Books", 6, 0, 1, 86), 
    #("Jags", 0, 7, 0, 0),
    #("Champloo", 1, 5, 1, 14),
    #("Bebops", 4, 1, 2, 57),
    #("Super Crooks", 3, 4, 0, 43);

insert into player(first_name, last_name, position, jersey_number, team_name) values
    ("Derrick", "Kyereh", "CB", 11, "Sharks"),
    ("Finn", "Longfin", "CM", 5, "Sharks"),
    ("Marvin", "Shortfin", "ST", 7, "Sharks"),

    ("Fast", "Attack", "LW", 8, "Barracudas"), 
    ("Lightning", "Quick", "CM", 6, "Barracudas"),
    ("Defensive", "End", "RB", 9, "Barracudas"),

    ("Zoro", "Roronoa", "RW", 17, "Straw Hats"),
    ("Sanji", "Vinsmoke", "RW", 31, "Straw Hats"),
    ("Luffy", "D Monkey", "ST", 1, "Straw Hats"),

    ("Buggy", "The Clown", "ST", 1, "Buggy Pirates"),
    ("Underling", "One", "CB", 4, "Buggy Pirates"),
    ("Small", "Fry", "RB", 3, "Buggy Pirates"),

    ("Doflamingo", "Donquixote", "ST", 1, "Donquixote Pirates"),
    ("Baby", "Pink", "RW", 7, "Donquixote Pirates"),
    ("Pica", "Trebol", "LW", 11, "Donquixote Pirates"),

    ("Corigatone", "Long", "ST", 13, "Hornets"),
    ("Lousito", "Longy", "LW", 5, "Hornets"),
    ("Amaro", "Longo", "LB", 3, "Hornets"),

    ("Super", "Man", "ST", 1, "Justice"), 
    ("Amazing", "SpiderMan", "LM", 8, "Justice"), 
    ("Dark", "Knight", "CB", 0, "Justice"), 

    ("Taylor", "Joseph", "ST", 5, "Bees"),
    ("Beef", "Paddington", "CAM", 6, "Bees"),
    ("Gandalf", "Grey", "GK", 99, "Bees"),

    ("John", "Cena", "LW", 9, "Hawks"),
    ("The", "Undertaker", "RWB", 15, "Hawks"),
    ("Rock", "Johnson", "GK", 00, "Hawks"),

    ("Harley", "Quinn", "CM", 10, "Blue Jays"),
    ("Simp", "Mordecai", "CM", 16, "Blue Jays"),
    ("Classic", "Rigby", "LWB", 3, "Blue Jays");

insert into player_stats(player_ID, goals, assists, saves) values 
    (1, 5, 2, 0),
    (2, 7, 3, 1),
    (3, 0, 2, 3),
    (4, 1, 4, 2),
    (5, 6, 1, 4),
    (6, 3, 0, 0),
    (7, 2, 0, 5),
    (8, 3, 5, 0),
    (9, 4, 6, 0),
    (10, 0, 0, 0),
    (11, 2, 4, 0),
    (12, 0, 6, 1),
    (13, 1, 4, 1),
    (14, 0, 8, 3),
    (15, 3, 5, 2),
    (16, 7, 9, 1),
    (17, 2, 4, 0),
    (18, 1, 5, 0),
    (19, 2, 4, 0),
    (20, 4, 6, 2),
    (21, 2, 3, 0),
    (22, 2, 4, 1),
    (23, 1, 2, 1),
    (24, 2, 1, 2),
    (25, 2, 3, 3),
    (26, 3, 3, 4),
    (27, 4, 4, 4),
    (28, 2, 2, 2),
    (29, 1, 1, 1),
    (30, 5, 5, 0);

insert into league(league_name, league_team_name, win_percentage) values
    ("Ocean Dwellers", "Sharks", 71),
    ("Ocean Dwellers", "Straw Hats", 100),
    ("Ocean Dwellers", "Barracudas", 14),
    ("Ocean Dwellers", "Buggy Pirates", 0),
    ("Ocean Dwellers", "Donquixote Pirates", 86),

    ("Air Dwellers", "Hornets", 28),
    ("Air Dwellers", "Justice", 43),
    ("Air Dwellers", "Bees", 57),
    ("Air Dwellers", "Hawks", 71),
    ("Air Dwellers", "Blue Jays", 43),

    #("Field Dwellers", "Jags", 0),
    #("Field Dwellers", "Books", 86),
    #("Field Dwellers", "Champloo", 14),
    ;

insert into games(games_date, games_team_name, home_goals, opponent, away_goals) values
    ('2022-10-29', "Sharks", 3, "Straw Hats", 5),
    ('2022-10-25', "Straw Hats", 4, "Barracudas", 2),
    ('2022-10-20', "Barracudas", 5, "Buggy Pirates", 0),
    ('2022-10-18', "Buggy Pirates", 0, "Donquixote Pirates", 7),
    ('2022-10-15', "Donquixote Pirates", 6, "Straw Hats", 7),
    ('2022-10-13', "Sharks", 5, "Barracudas", 1),
    ('2022-10-11', "Straw Hats", 6, "Buggy Pirates", 0),
    ('2022-10-9', "Barracudas", 3, "Donquixote Pirates", 7),
    ('2022-10-7', "Barracudas", 2, "Straw Hats", 4),
    ('2022-10-5', "Sharks", 1, "Buggy Pirates", 1),


    ('2022-10-16', "Hornets", 5, "Justice", 7),
    ('2022-10-14', "Justice", 1, "Bees", 3),
    ('2022-10-12', "Bees", 6, "Hawks", 0),
    ('2022-10-10', "Hawks", 1, "Blue Jays", 2),
    ('2022-10-8', "Blue Jays", 1, "Hornets", 1),
    ('2022-10-6', "Justice", 1, "Hawks", 2),
    ('2022-10-4', "Bees", 0, "Blue Jays", 5),
    ('2022-10-2', "Hawks", 2, "Hornets", 2),
    ('2022-10-1', "Hornets", 5, "Blue Jays", 2),
    ('2022-9-30', "Bees", 3, "Justice", 4),
    ;