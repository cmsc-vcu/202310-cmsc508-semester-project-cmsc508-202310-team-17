import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPlayersComponent } from './list-players/list-players.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'tables-access-grated/SJHGUIHjHUGHUJKGHUGHGJNUFG^3723298872342342342', component: ListPlayersComponent },
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
