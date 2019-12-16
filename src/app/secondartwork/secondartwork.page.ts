import { Component, OnInit } from '@angular/core';
import { ApisecondartworkService } from '../apisecondartwork.service';
import { Router } from '@angular/router';
import { artworks } from '../apifirstartwork.service';

@Component({
  selector: 'app-secondartwork',
  templateUrl: './secondartwork.page.html',
  styleUrls: ['./secondartwork.page.scss'],
})
export class SecondartworkPage implements OnInit {

  artArray : Array<artworks> = [];
  art : artworks;
  constructor(private route : Router, private apiArtwork : ApisecondartworkService) { }

  ngOnInit() {
    this.getArtworks();
  }

  getArtworks() {
    this.apiArtwork.getAllSecondArtwork().subscribe((res: Array<artworks>) => {
      this.artArray = res;

    })
  }


}
