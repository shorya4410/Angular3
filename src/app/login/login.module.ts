import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasicComponent,
    AdminloginComponent,
    UserloginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  exports: [
    BasicComponent,
    AdminloginComponent,
    UserloginComponent
  ]
})
export class LoginModule { }
