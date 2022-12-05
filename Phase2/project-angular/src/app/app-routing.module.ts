import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { LeagueComponent } from './league/league.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { LoginComponent } from './login/login.component';
import { PlayerStats } from './player-stats';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { ReportsComponent } from './reports/reports.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: 'tables-access-grated', component: ListPlayersComponent },
  { path: '', component: LoginComponent},
  { path: 'teams', component: TeamComponent},
  { path: 'games', component: GamesComponent},
  { path: 'league', component: LeagueComponent},
  { path: 'player-stats', component: PlayerStatsComponent},
  { path: 'reports', component: ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
