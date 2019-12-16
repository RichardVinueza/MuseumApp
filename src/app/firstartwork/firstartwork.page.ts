import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApifirstartworkService, artworks } from '../apifirstartwork.service';

@Component({
  selector: 'app-firstartwork',
  templateUrl: './firstartwork.page.html',
  styleUrls: ['./firstartwork.page.scss'],
})
export class FirstartworkPage implements OnInit {

  artArray : Array<artworks> = [];
  art : artworks;
  constructor(private route : Router, private apiArtwork : ApifirstartworkService) { }

  ngOnInit() {
    this.getArtworks();
  }

  getArtworks() {
    this.apiArtwork.getAllFirstArtwork().subscribe((res: Array<artworks>) => {
      this.artArray = res;

    })
  }


}
