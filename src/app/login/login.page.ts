import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginapiService, LoginVariables } from '../loginapi.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  get email(){
    return this.registrationForm.get('email');
  }

  get password(){
    return this.registrationForm.get('password');
  }

  public errorMessages = {
    email:[
      {type: 'required', message: 'Email is required'},
      {type: 'maxlength', message: 'Email cant be longer than 100 chracters'}
    ],
    password:[
      {type: 'required', message: 'Password is required'},
      {type: 'maxLength', message: 'Password to long'}
    ]
  }

  registrationForm = this.formBuilder.group({
    email: ['',[Validators.required, 
      Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
    password: ['', [Validators.required, Validators.maxLength(100)]]
  });

  constructor(private route: Router, private loginapi : LoginapiService, private formBuilder: FormBuilder) { }


  public submit(){
    console.log(this.registrationForm.value);
    this.goToDisplayDataFromLogin();
  }

  ngOnInit() {
  }

  missingUser : boolean = false;
  goToDisplayDataFromLogin(){
    this.loginapi.getUserExists().subscribe((res) => {
      var result = JSON.parse(JSON.stringify(res))
      for (let i=0; i < result.length; i++ ){
        if ((result[i].email == this.registrationForm.get("email").value) &&
        (result[i].password == this.registrationForm.get("password").value) &&
        (result[i].admin == 0)){
          this.route.navigate(['/expositions']);
        }else{
          this.missingUser = true;   
          setTimeout(() => {
            this.missingUser = false;
          }, 1300);         
        }
        if(result[i].admin == 1){
          this.route.navigate(['/admin']);
        }
      }     
    });
  }
}
