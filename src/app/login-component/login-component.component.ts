import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  loginUserData = [];

  login(): void {
    this.loginService.sendGetRequest().subscribe(
      (data: any) =>
        this.loginUserData = data
    );
  }



}
