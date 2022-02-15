import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MyMaterialModule } from './material.module';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';

import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    RegistrationComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },


    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
