import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from 'src/app/games';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  baseUrl: string = 'http://cmsc508.com/202310/team17/game/';

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<Game>( this.baseUrl + 'view.php');
  }

  createGame(game:Game){
    return this.http.post<Game>(this.baseUrl + 'insert.php', game);
  }

  updateGame(game:Game){
    return this.http.put<Game>(this.baseUrl + "update.php", game);
  }


  deleteGame(id: any) {
   
    return this.http.delete(this.baseUrl + 'delete.php?match_ID=' + id);
  }

}
