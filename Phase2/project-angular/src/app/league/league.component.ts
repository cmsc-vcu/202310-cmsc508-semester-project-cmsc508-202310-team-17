import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { LeagueService } from '../services/league-service/league.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss'],
})
export class LeagueComponent implements OnInit {
  leagues: any;
  leagueForm!: FormGroup;
  creatingNewTeam!: boolean;
  editing!: boolean;
  leagueForm2!: FormGroup;
  isDisabled!: boolean;
  league:any;
  constructor(private leagueService: LeagueService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editing = false;
    this.creatingNewTeam = false;
    this.isDisabled = true;
  
    this.leagueForm = this.fb.group({
      league_name: '',
      league_team_name: '',
      win_percentage:''
    });

    this.leagueService
      .getLeageue()
      .pipe(
        map((leagues: any) => {
          this.leagues = leagues.result;
        })
      )
      .subscribe();
  }
  showCreateForm() {
    this.creatingNewTeam = true;
   }
 
   cancle(){
     this.creatingNewTeam =false;
   }

   cancleEdit() {
    this.editing = false;
  }

  submitForm(game:any){
      this.leagueService.addLeague(game).subscribe(() => {
        window.location.reload();
      });

  }
  edit(league:any) {
    this.editing = true;
  this.league = league
    this.leagueForm2 = this.fb.group({
    league_name: league.league_name,
    league_team_name: league.league_team_name,
    win_percentage: league.win_percentage
  });
  }
  deleteLeague(leagueName:string, league_team_name:string) {
    this.leagueService.deleteLeague(leagueName,league_team_name).subscribe(() => {
      window.location.reload();
    })
  }

  submitEdit(league:any){
    this.leagueService.updateLeague(league).subscribe(() => {
      window.location.reload();
    })
  }
}
