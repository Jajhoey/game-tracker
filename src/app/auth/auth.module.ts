import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetPassComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ResetPassComponent
  ]
})
export class AuthModule { }
