import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdashComponent } from './userdash/userdash.component';
import { FormsModule } from '@angular/forms';
import { EmailVerifyComponent } from './email-verify/email-verify.component';



@NgModule({
  declarations: [
    UserdashComponent,
    EmailVerifyComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserdashComponent,
    EmailVerifyComponent
  ]
})
export class UserModuleModule { }
