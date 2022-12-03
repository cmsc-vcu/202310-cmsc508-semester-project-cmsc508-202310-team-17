import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { league } from '../../league';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  baseUrl: string = 'http://cmsc508.com/202310/team17/league/';

  constructor(private http: HttpClient) {}

  getLeageue() {
    return this.http.get<league>(this.baseUrl + 'view.php');
  }

  addLeague(league: league) {
    return this.http.post<league>(this.baseUrl + 'insert.php', league);
  }

  deleteLeague(leagueName: string, league_team_name: string) {
    console.log('this is league name', leagueName);
    console.log('this is league team name', league_team_name);
    return this.http.delete<league>(
      this.baseUrl +
        'delete.php?league_name=' + leagueName + '&&league_team_name=' +league_team_name
    );
  }
  updateLeague(league:league){
    console.log(league);
    return this.http.put(this.baseUrl + 'update.php', league);
  }
}
