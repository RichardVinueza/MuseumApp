import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signup, SignupapiService } from '../signupapi.service';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  dataPostUser: signup;
  idUser: number;
  fullName: string;
  email: string;
  nationality: string;
  password: string;
  admin: boolean
  

  constructor(private route: Router, private apiSignup: SignupapiService) { }

  ngOnInit() {
  }

  ionViewWillEnte() {
    this.goToDisplayData();
    this.goToLogin()
  }

  goToDisplayData() {
    if (this.fullName != null && this.email != null && this.nationality != null && this.password != null) {
      this.postOneUser();
      this.route.navigate(['/displaydata']);
    }

  }

  postOneUser() {

    this.dataPostUser = {
      idUser: 0,
      fullName: this.fullName,
      email: this.email,
      nationality: this.nationality,
      password: this.password,
      admin: false

    }

    this.apiSignup.postUser(this.dataPostUser).subscribe((res) => {
      console.log(res);
    }, (error) => {
      console.log(error);
    });
  }

  goToLogin(){
    this.route.navigate(['/login']);
  }

}
