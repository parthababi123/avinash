import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { fakeBackendProvider } from './helpers/fake-backend';
import { JwtInterceptor } from './helpers/jwt.interceptor';
//import { AuthInterceptor } from './helpers/AuthInterceptor';
//import {  ErrorInterceptor } from './helpers/error.interceptor';
import { AlertComponent } from './alert/alert.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftsidebarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
        //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        //fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }






  

