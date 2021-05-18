import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './login/adminlogin/adminlogin.component';
import { BasicComponent } from './login/basic/basic.component';
import { UserloginComponent } from './login/userlogin/userlogin.component';
import { UserdashComponent } from './user-module/userdash/userdash.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { AdmindashComponent } from './admin-module/admindash/admindash.component';
import { EmailVerifyComponent } from './user-module/email-verify/email-verify.component';

const routes: Routes = [
  {
    path:'', component:BasicComponent
  },
  {
    path:'adminlogin', component:AdminloginComponent
  },
  {
    path:'userlogin', component:UserloginComponent
  },
  {
    path:'userdash', component:UserdashComponent, canActivate:[ AuthGuardGuard ]
  },
  {
    path:'admindash', component:AdmindashComponent, canActivate:[ AuthGuardGuard ]
  },
  {
    path:'emailVerify', component:EmailVerifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
