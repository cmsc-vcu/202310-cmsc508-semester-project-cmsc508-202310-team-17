import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';

import { TeamService } from '../services/team-service/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  teams: any;
  teamForm!: FormGroup;
  creatingNewTeam!: boolean;
  editing!: boolean;
  teamForm2!: FormGroup;
  isDisabled!: boolean;

  constructor(
    private teamService: TeamService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editing = false;
    this.creatingNewTeam = false;
    this.isDisabled = true;

    this.teamForm = this.formBuilder.group({
      teams_name: '',
      team_wins: '',
      team_losses: '',
      team_ties: '',
      team_win_percent: '',
    });

    this.teamService
      .getTeams()
      .pipe(
        map((data: any) => {
          this.teams = data.result;
        })
      )
      .subscribe();
  }

  submit(team: any) {
    this.teamService.createTeam(team).subscribe(() => {
      this.ngOnInit();
    });
  }

  showCreateForm() {
    this.creatingNewTeam = true;
  }

  cancle() {
    this.creatingNewTeam = false;
  }

  edit(team: any) {
    this.editing = true;

    this.teamForm2 = this.formBuilder.group({
      teams_name: team.teams_name,
      team_wins: team.team_wins,
      team_losses: team.team_losses,
      team_ties: team.team_ties,
      team_win_percent: team.team_win_percent,
    });
  }

  cancleEdit() {
    this.editing = false;
  }

  submitEdit(team: any) {
    this.teamService.updateTeam(team).subscribe(() => {
      this.ngOnInit();
    });
  }

  routeTo(s:string){
    this.router.navigate(['/' + s]);
  }
}
