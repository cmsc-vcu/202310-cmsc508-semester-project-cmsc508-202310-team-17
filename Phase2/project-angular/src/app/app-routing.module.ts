import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPlayersComponent } from './list-players/list-players.component';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: 'tables-access-grated', component: ListPlayersComponent },
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
