import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  baseUrl: string = 'http://cmsc508.com/202310/team17/player/login.php';
  constructor(private http: HttpClient,
    private router: Router) {}

  login(username: string, user_pass: string) {
    return this.http
      .post<any>(this.baseUrl, { username, user_pass })
      .pipe(
        map((result) => {
          if (result.message === 'success') {
            console.log('Access Granted');
            this.router.navigate(['/tables-access-grated/SJHGUIHjHUGHUJKGHUGHGJNUFG^3723298872342342342']);
          } else {
            window.alert("USERNAME AND PASSWORD IS NOT REGISTERD");
          }
        })
      )
      .subscribe();
  }
}
