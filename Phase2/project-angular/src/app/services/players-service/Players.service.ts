import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Players } from '../../players';
@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://cmsc508.com/202310/team17/player/';

  getPlayers() {
    return this.http.get<Players>(this.baseUrl + 'view.php');
  }

  createPlayer(player: Players) {
    return this.http.post<Players>(this.baseUrl + 'insert.php', player);
  }

  deletePLayer(id: any) {
    console.log(id);
    return this.http.delete(this.baseUrl + 'delete.php?id=' + id);
  }

  editPlayer(player: Players) {
    return this.http.put(this.baseUrl + 'update.php', player);
  }
}
