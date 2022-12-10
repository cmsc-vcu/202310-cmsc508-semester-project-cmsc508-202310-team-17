import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { PlayerStatsService } from '../services/player-stats-service/player-stats.service';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss'],
})
export class PlayerStatsComponent implements OnInit {
  players: any;
  playerStatsForm!: FormGroup;
  creatingNewTeam!: boolean;
  editing!: boolean;
  playerStatsForm2!: FormGroup;
  isDisabled!: boolean;
  editPlayerStatenabled!:boolean;

  constructor(
    private playerStatsService: PlayerStatsService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.editing = false;
    this.creatingNewTeam = false;
    this.isDisabled = true;

    this.playerStatsService
      .getPlayerStats()
      .pipe(
        map((players:any) => {
          this.players = players.data;
        })
      )
      .subscribe();

    this.playerStatsForm = this.fb.group({
      player_ID: '',
      goals: '',
      assists: '',
      saves: '',
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

  submitForm(data: any) {
    this.playerStatsService.addPlayerStats(data).subscribe(() => {
      this.ngOnInit();
    });
  }

  deletePlayerStats(id:number){
    this.playerStatsService.deleteStats(id).subscribe(() => {
      this.ngOnInit();
    });

  }

  edit(formData:any){
     this.editing = true;
      this.playerStatsForm2 =this.fb.group({
      player_ID:formData.player_ID,
      goals: formData.goals,
      assists:formData.assists,
      saves:formData.saves
    })

  }

  submitEdit(formData:any){
    this.playerStatsService.updateStats(formData).subscribe(() =>{
      this.ngOnInit();
      this.editing = false;
    })
  }

  routeTo(s:string){
    this.router.navigate(['/' + s]);
  }
}
