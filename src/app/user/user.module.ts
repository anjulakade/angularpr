import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterUserComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[
    RegisterUserComponent,
    ViewUserComponent
  ]
})
export class UserModule { }
