import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';

export class LoginVariables {
  email : string;
  password : string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginapiService {


  constructor(private http: HttpClient) { }

  getUserExists(){
    return this.http.get("http://localhost:8080/api/getUsers/");
  }
}
