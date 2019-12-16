import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class artworks {
  idArtwork : number;
  name : string;
  authorFullName : string;
  authorNationality : string;
  category : string;
  creationDate : string;
  creationPeriod : string;
  image : string;
}

@Injectable({
  providedIn: 'root'
})
export class ApithirdartworkService {
  
  constructor(private http : HttpClient) { }

  getAllThirdArtwork(){
    return this.http.get("http://localhost:8080/api/getArtworks");
  }
}
