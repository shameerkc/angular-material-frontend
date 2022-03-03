import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CpuComponent } from './cpu/cpu.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MyMaterialModule } from './material.module';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { VolumeComponent } from './volume/volume.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    VolumeComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
      { path: 'volume', component: VolumeComponent },
      { path: 'cpu', component: CpuComponent },
      { path: 'users', component: UserManagementComponent }
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
