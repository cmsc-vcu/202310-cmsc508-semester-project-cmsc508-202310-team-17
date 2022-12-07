import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  baseUrl = "http://cmsc508.com/202310/team17/queries/";
  constructor( private http: HttpClient) { }

  getQuery1() {
   return this.http.get(this.baseUrl + 'query1.php');
  }
  getQuery2() {
    return this.http.get(this.baseUrl + 'query2.php');
   }

   getQuery3() {
    return this.http.get(this.baseUrl + 'query3.php');
   }

   getQuery4() {
    return this.http.get(this.baseUrl + 'query4.php');
   }
   getQuery5() {
    return this.http.get(this.baseUrl + 'query5.php');
   }
   getQuery6() {
    return this.http.get(this.baseUrl + 'query6.php');
   }
   getQuery7() {
    return this.http.get(this.baseUrl + 'query7.php');
   }
   getQuery8() {
    return this.http.get(this.baseUrl + 'query8.php');
   }
   getQuery9() {
    return this.http.get(this.baseUrl + 'query9.php');
   }
   getQuery10() {
    return this.http.get(this.baseUrl + 'query10.php');
   }
   getQuery11() {
    return this.http.get(this.baseUrl + 'query11.php');
   }
   getQuery12() {
    return this.http.get(this.baseUrl + 'query12.php');
   }
   getQuery13() {
    return this.http.get(this.baseUrl + 'query13.php');
   }
   getQuery14() {
    return this.http.get(this.baseUrl + 'query14.php');
   }
   getQuery15() {
    return this.http.get(this.baseUrl + 'query15.php');
   }
   getQuery16() {
    return this.http.get(this.baseUrl + 'query16.php');
   }
   getQuery17() {
    return this.http.get(this.baseUrl + 'query17.php');
   }
   getQuery18() {
    return this.http.get(this.baseUrl + 'query18.php');
   }
   getQuery19() {
    return this.http.get(this.baseUrl + 'query19.php');
   }
   getQuery20() {
    return this.http.get(this.baseUrl + 'query20.php');
   }

}
