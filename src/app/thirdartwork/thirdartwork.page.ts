import { Component, OnInit } from '@angular/core';
import { artworks } from '../apifirstartwork.service';
import { Router } from '@angular/router';
import { ApithirdartworkService } from '../apithirdartwork.service';

@Component({
  selector: 'app-thirdartwork',
  templateUrl: './thirdartwork.page.html',
  styleUrls: ['./thirdartwork.page.scss'],
})
export class ThirdartworkPage implements OnInit {

  artArray : Array<artworks> = [];
  art : artworks;
  constructor(private route : Router, private apiArtwork : ApithirdartworkService) { }

  ngOnInit() {
    this.getArtworks();
  }

  getArtworks() {
    this.apiArtwork.getAllThirdArtwork().subscribe((res: Array<artworks>) => {
      this.artArray = res;

    })
  }
}
