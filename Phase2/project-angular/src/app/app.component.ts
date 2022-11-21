import { Component } from '@angular/core';
import {PlayersService } from './services/players-service/Players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proj';
  constructor(private playerServices: PlayersService){

  }
  onSend(name:string){
  const formData: FormData = new FormData()
  formData.append('name',name)
  }
}
