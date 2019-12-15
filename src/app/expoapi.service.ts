import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { Time } from '@angular/common';

export class expositions {
  idExposition : number;
  name : string;
  artworksNumber : number;
  timeFrame: string;

}
@Injectable({
  providedIn: 'root'
})
export class ExpoapiService {

  constructor(private http: HttpClient) { }

  getAllExpositions(){
    return this.http.get("http://localhost:8080/api/getExpositions");
  }
}
