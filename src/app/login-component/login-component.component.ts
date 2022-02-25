import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  emailAddress: string = '';
  password: string = '';


  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  loginUserData = [];

  login(): void {
    this.loginService.getLoginUser(this.emailAddress, this.password);
  }



}
