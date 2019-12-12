import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { Params } from '@angular/router';

export class signup {

  idUser : number;
  fullName : String;
  email : String;
  nationality : string;
  password : String;
  admin: boolean;


}

@Injectable({
  providedIn: 'root'
})
export class SignupapiService {

  constructor(private http: HttpClient) { }

  postUser(dataToPostUser : any){
    console.log(dataToPostUser);
    return this.http.post("http://localhost:8080/api/postUser",null, { params: dataToPostUser});
    
  }



}
