import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { HttpClient } from '@angular/common/http';
import { AuthserviceService } from '../../authservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
Alogin : FormGroup;
AdminBaseUrl = 'http://localhost:3000/admin';
adminName : any;
adminPass : any;
vacantInput = 0;
  constructor(  private authservice : AuthserviceService, private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('TokenforAdmin');
    this.Alogin = new FormGroup({
      'Aname' : new FormControl(null, Validators.required),
      'Apass' : new FormControl(null, Validators.required)
    });
  }
  AdminLogging(){
    this.adminName = this.Alogin.value.Aname;
    this.adminPass = this.Alogin.value.Apass;
    if (this.adminPass == null || this.adminName == null) {
      this.vacantInput=1;
    }
    else{
      this.authservice.AdminLoggingauth(this.adminName,this.adminPass );
    }    
  }
  goToHome(){
    this.router.navigateByUrl('');
  }

}
