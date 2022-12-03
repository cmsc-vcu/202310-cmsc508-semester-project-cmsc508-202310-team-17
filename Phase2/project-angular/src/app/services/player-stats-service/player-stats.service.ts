import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayerStats } from 'src/app/player-stats';

@Injectable({
  providedIn: 'root'
})
export class PlayerStatsService {

  baseUrl: string = 'http://cmsc508.com/202310/team17/player-stats/';
  constructor( private http: HttpClient) { }

  getPlayerStats() {
    return this.http.get<PlayerStats>(this.baseUrl + 'view.php');
  }

  updateStats(ps:PlayerStats) {
    return this.http.put<PlayerStats>(this.baseUrl + 'update.php', ps);
  }

  deleteStats(id:number){
    console.log(id);
    return this.http.delete<PlayerStats>(this.baseUrl + 'delete.php?player_ID=' + id);
 }

 addPlayerStats(ps:PlayerStats) {
    return this.http.post<PlayerStats>(this.baseUrl + 'insert.php',ps);
 }
  
}
