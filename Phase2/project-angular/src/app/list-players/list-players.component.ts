import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Players } from '../players';
import { PlayersService } from '../services/players-service/Players.service';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.scss'],
})
export class ListPlayersComponent implements OnInit {
  players: any;
  formData!: FormGroup;
  wantToAddPlayer!: boolean;
  editPLayerEnabled!: boolean;
  player!: Players;
  formData2!: FormGroup;
  constructor(
    private playersService: PlayersService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    


    this.wantToAddPlayer = false;
    this.playersService
      .getPlayers()
      .pipe(
        map((data: any) => {
          this.players = data.data;
        })
      )
      .subscribe();

    this.formData = this.formBuilder.group({
      first_name: '',
      last_name: '',
      position: '',
      jersey_number: '',
      team_name: '',
    });
  }
  cancleCreatePlayer(){
    this.wantToAddPlayer = false;
  }
  cancle() {
    this.editPLayerEnabled = false;
  }
  submitChanges(player: any) {
    this.playersService.editPlayer(player).subscribe(() => {
      this.ngOnInit();
      this.editPLayerEnabled =false;
    });
  }
  editPlayer(player: Players) {
    this.editPLayerEnabled = true;
    this.player = player;
    this.formData2 = this.formBuilder.group({
      id: player.ID,
      first_name: player.first_name,
      last_name: player.last_name,
      position: player.position,
      jersey_number: player.jersey_number,
      team_name: player.team_name,
    });
  }

  addPlayer(Player: object) {
    this.playersService.createPlayer(Player).subscribe(() => {
     this.ngOnInit();
    });
  }

  showPlayerForm() {
    this.wantToAddPlayer = !this.wantToAddPlayer;
  }
  deletePlayer(id: number) {
    this.playersService.deletePLayer(id).subscribe(() => {
      this.ngOnInit();
    });
  }
  routeTo(s:string){
    this.router.navigate(['/' + s]);
  }
}
