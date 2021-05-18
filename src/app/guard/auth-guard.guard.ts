import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
//import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate() {
      if(localStorage.getItem('Id'))
      {
        return true;  
      }
      else if( localStorage.getItem('TokenforAdmin')){
        return true;
      }
      else{
        this.router.navigateByUrl('userlogin');
      }

      
    
  }
  
}
