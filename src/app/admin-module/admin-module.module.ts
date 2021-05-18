import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashComponent } from './admindash/admindash.component';



@NgModule({
  declarations: [
    AdmindashComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdmindashComponent
  ]
})
export class AdminModuleModule { }
