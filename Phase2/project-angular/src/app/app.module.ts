import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PlayersService } from './services/players-service/Players.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { TeamComponent } from './team/team.component';
import { GamesComponent } from './games/games.component';
import { LeagueComponent } from './league/league.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent,
    LoginComponent,
    TeamComponent,
    GamesComponent,
    LeagueComponent,
    PlayerStatsComponent,
    ReportsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
