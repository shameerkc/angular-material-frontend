import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { LoginUser } from './loginuser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAuthenticated: boolean = false;
  loginUsername: String = "";

  private REST_API_SERVER = "http://localhost:3000/login";

  constructor(
    private httpClient: HttpClient
  ) { }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public getLoginUser(emailAddress: string, password: string) {
    this.getLoginUserData(emailAddress, password).subscribe(
      (data: LoginUser) => {
        this.isAuthenticated = true;
        this.loginUsername = data.name;
      }
    );
  }

  getLoginUserData(emailAddress: string, password: string) {
    return this.httpClient.get<LoginUser>(this.REST_API_SERVER, {
      params: {
        userId: emailAddress,
        pwd: password
      }
    })
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
