import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private loginService: AuthServiceService, private fb: FormBuilder) {

   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: '',
      user_pass: '' 
    });
  }

  login(data:any){
    this.loginService.login(data.username, data.user_pass);
  }
}
