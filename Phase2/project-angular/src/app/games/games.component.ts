import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../services/game-service/game-service.service';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games: any;
  gameForm!: FormGroup;
  creatingNewTeam!: boolean;
  editing!: boolean;
  gameForm2!: FormGroup;
  isDisabled!: boolean;

  constructor(
    private gameService: GameServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.editing = false;
    this.creatingNewTeam = false;
    this.isDisabled = true;

    this.gameService
      .getGames()
      .pipe(
        map((games: any) => {
          this.games = games.result;
        })
      )
      .subscribe();

    this.gameForm = this.fb.group({
      games_date: '',
      games_team_name: '',
      home_goals: '',
      opponent: '',
      away_goals: '',
    });
  }
  showCreateForm() {
    this.creatingNewTeam = true;
  }

  cancle() {
    this.creatingNewTeam = false;
  }

  cancleEdit() {
    this.editing = false;
  }

  submitForm(game: any) {
    this.gameService.createGame(game).subscribe(() => {
      window.location.reload();
    });
  }
  edit(game: any) {
    this.editing = true;

    this.gameForm2 = this.fb.group({
      match_ID: game.match_ID,
      games_date: game.games_date,
      games_team_name: game.games_team_name,
      home_goals: game.home_goals,
      opponent: game.opponent,
      away_goals: game.away_goals,
    });
  }
  submitEdit(game: any) {
    this.gameService.updateGame(game).subscribe(() => {
      window.location.reload();
    });
  }

  deleteGame(ID: number) {
    this.gameService.deleteGame(ID).subscribe(() => {
      window.location.reload();
    });
  }
}
