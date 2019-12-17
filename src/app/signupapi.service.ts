import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Params } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupapiService {

  constructor(private http: HttpClient) { }

  // Http Options, nos sirve para poner el formato JSON deseado
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  postUser(dataToPostUser) {
    //Metemos dentro de la varaible options el formato 
    let options = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('fullName', dataToPostUser.fullName);
    urlSearchParams.append('email', dataToPostUser.email);
    urlSearchParams.append('nationality', dataToPostUser.nationality);
    urlSearchParams.append('password', dataToPostUser.password);
    urlSearchParams.append('admin', dataToPostUser.admin);
    let body = urlSearchParams.toString();

    console.log("tibu" + dataToPostUser);
    return this.http.post("http://localhost:8080/api/postUser", body, options);
    
    // .pipe(
    //   catchError(this.handleError)
    // );
  }

  // private handleError(error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const err = error || '';
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }

}
