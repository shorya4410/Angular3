import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  AdminBaseUrl = 'http://localhost:3000/admin';
  UserBaseUrl = 'http://localhost:3000/userdata';
  val : any = [];
  val2 : any = [];
  constructor(private http:HttpClient, private router:Router) { }

  AdminLoggingauth(inputUserName, inputPass){
    this.http.get(`${this.AdminBaseUrl}`).subscribe(checkDetail =>{
        this.val = checkDetail;
      });
      //console.log(this.val);
     
      for (let i = 0 ; i < this.val.length ; i++)
      {
          if( this.val[i]['Aname'] == inputUserName && this.val[i]['Apass'] == inputPass)
            { console.log("Admin logged in"); 
              this.router.navigateByUrl('admindash');
              localStorage.setItem('TokenforAdmin','allowed');  
              return true;  
          }
          else
          { 
            alert("Incorrect Credentials");
            this.router.navigateByUrl('adminlogin')
          }
      }
      //else{
        //console.log("Enter valid credentials");
      //}
  }
  UserloginAuth(inputUser, inputUserPass){
    this.http.get(`${this.UserBaseUrl}`).subscribe(checkData =>{
      this.val2 = checkData;
    })
    for( let i = 0 ; i < this.val2.length ; i++ ){
      if(this.val2[i]['UserName'] == inputUser && this.val2[i]['UPass'] == inputUserPass  )
      { 
        if( this.val2[i]['isEnabled'] == true){
          console.log("User logged in");
          localStorage.setItem('Id', this.val2[i]['id']);
          this.router.navigateByUrl('userdash');
          return true;
        }
        else{
          alert("User Disabled by Admin");
        }  
      }
      else{
        this.router.navigateByUrl('userlogin');
      }
    }
  }

}
