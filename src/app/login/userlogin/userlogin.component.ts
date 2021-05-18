import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthserviceService } from '../../authservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
Ulogin : FormGroup;
UserRegister : FormGroup;
login = 1;
UserNAME :any;
UserPASS :any;
baseUrl = 'http://localhost:3000/userdata';
showError = 0;
  constructor( private authService : AuthserviceService, private http : HttpClient, private router: Router ) { }

  ngOnInit(): void {
    localStorage.removeItem('Id');
    this.Ulogin = new FormGroup({
      'UserName' : new FormControl(null, [Validators.required]),
      'UPass' : new FormControl(null, [Validators.required])
    });
    this.UserRegister = new FormGroup({
      'id' : new FormControl(null, Validators.required),
      'UserName' : new FormControl(null, Validators.required),
      'Uname' : new FormControl(null, Validators.required),
      'Unumber' : new FormControl(null, Validators.maxLength(10)),
      'Uemail' : new FormControl(null, [Validators.email, Validators.required]),
      'UPass' : new FormControl(null , [Validators.required]),
      'Uimg' : new FormControl(null, Validators.required),
      'verified' : new FormControl(false),
      'emailOTP' : new FormControl(),
      'friendRequest' : new FormControl(null),
      'friends' : new FormControl()
    
      //'RecheckPass' : new FormControl(null, [Validators.required])
    });
  }
  
  goToHome(){
    this.router.navigateByUrl('');
  }
  goToCreateAcc(){
    this.login=0;
  }
  goToUlogin(){
    this.login=1;
  }
  UloggingIn(){
    this.UserNAME = this.Ulogin.value.UserName;
    this.UserPASS = this.Ulogin.value.UPass;
    if( this.Ulogin.value.UserName == null || this.Ulogin.value.UPass == null){
      
      this.showError = 0;
    }  
    else{
      this.authService.UserloginAuth(this.UserNAME, this.UserPASS);
    }
  }
  CreateAcc(){
    this.http.post<any>(`${this.baseUrl}`, this.UserRegister.value).subscribe(responseData =>{
      console.log(responseData);
      this.goToUlogin();
  });
  
  }
}
