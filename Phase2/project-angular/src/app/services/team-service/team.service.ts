import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teams } from 'src/app/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  baseUrl: string = 'http://cmsc508.com/202310/team17/team/';

  constructor(private http: HttpClient) { }

getTeams() {
 return this.http.get<Teams>( this.baseUrl + 'view.php');
}

createTeam(team: Teams) {
  return this.http.post<Teams>(this.baseUrl + 'insert.php', team);
}

updateTeam(team:Teams){
  return this.http.put<Teams>(this.baseUrl + 'update.php', team);
}


}
