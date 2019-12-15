import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpoapiService, expositions } from '../expoapi.service';

@Component({
  selector: 'app-expositions',
  templateUrl: './expositions.page.html',
  styleUrls: ['./expositions.page.scss'],
})
export class ExpositionsPage implements OnInit {

  expoArray: Array<expositions> = [];
  expo: expositions;
  idExposition : expositions;


  constructor(private route: Router, private apiExpo: ExpoapiService) { }

  ngOnInit() {
    this.getAllExpositions();
  }


  getAllExpositions() {
    this.apiExpo.getAllExpositions().subscribe((res: Array<expositions>) => {
      this.expoArray = res;
    })
  }


  goToArtworks() {
    this.route.navigate(['/firstartwork']);
  }
  goToArtworks2() {
    this.route.navigate(['/secondartwork']);
  }
  goToArtworks3() {
    this.route.navigate(['/thirdartwork']);
  }

}
