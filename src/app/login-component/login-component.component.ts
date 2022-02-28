import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  emailAddress: string = '';
  password: string = '';

  loginForm: FormGroup = new FormGroup(
    {
      emailFormControl: new FormControl('', [Validators.required, Validators.email]),
      passwordControl: new FormControl('', [Validators.required])
    });


  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  loginUserData = [];

  login(): void {
    if (this.loginForm.valid) {
      this.loginService.getLoginUser(this.emailAddress, this.password);
    } else {
      console.log("Login form validation failed.");
    }
  }
}
