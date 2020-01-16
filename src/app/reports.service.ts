import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class report {
  pdf : string;
}
@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http : HttpClient) { }

  getListUserFromDB(){
    return this.http.get("http://localhost:8080/api/users/jreport");
  }

  getJreportHTML(){
    return this.http.get("https://localhost:8080/jreports/jreport.html");
  }

  getJreportPDF(){
    return this.http.get("https://localhost:8080/jreports/jreport.pdf");
  }


}
