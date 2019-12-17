import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupapiService } from '../signupapi.service';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  get fullName() {
    return this.signUpForm.get('fullName');
  }
  get email() {
    return this.signUpForm.get('email');
  }

  get nationality() {
    return this.signUpForm.get('nationality');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get admin() {
    return this.signUpForm.get('admin');
  }



  public errorMessages = {
    fullName: [
      { type: 'required', message: 'Full name is required' },
      { type: 'maxlength', message: 'Full name cant be longer than 100 chracters' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'maxlength', message: 'Email cant be longer than 100 chracters' }
    ],
    nationality: [
      { type: 'required', message: 'nationality is required' },
      { type: 'maxlength', message: ' cant be longer than 100 chracters' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'maxLength', message: 'Password to long' }
    ]
  }

  signUpForm = this.formBuilder.group({
    fullName: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required,
    Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
    nationality: ['', [Validators.required, Validators.maxLength(100)]],
    password: ['', [Validators.required, Validators.maxLength(100)]],
    admin: [0]
  });

  constructor(private route: Router, private apiSignup: SignupapiService, private formBuilder: FormBuilder) { }


  public submit() {
    console.log(this.signUpForm.value);
    this.postOneUser();
  }

  ngOnInit() {
  }

  postOneUser() {
    console.log("tibu postOneUser");
    let dataPostUser = {
      "fullName": this.signUpForm.get("fullName").value,
      "email": this.signUpForm.get("email").value,
      "nationality": this.signUpForm.get("nationality").value,
      "password": this.signUpForm.get("password").value,
      "admin": 0
    };
    this.apiSignup.postUser(dataPostUser).subscribe();
    console.log("tibu" + JSON.stringify(dataPostUser));
    this.route.navigate(['/expositions']);
  }

  goToLogin() {
    this.route.navigate(['/login']);
  }

}
