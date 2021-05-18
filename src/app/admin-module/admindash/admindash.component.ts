import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  detail : any = [];
  getval :any = [] ;
  basicUrl = 'http://localhost:3000/userdata';
  
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get(`${this.basicUrl}`).subscribe(getdata =>{
      this.detail = (getdata);
      console.log(this.detail);  
    });
  }
  enableUser(id:any){
    
    console.log(id);
        this.http.patch(`${this.basicUrl}/${id}`, {
          'isEnabled' : true 
        }).subscribe(getdata => {
          console.log(getdata);
          alert("User Enabled for login");
        })
    }
  disableUser(id:any){
    
      this.http.patch(`${this.basicUrl}/${id}`, {
        'isEnabled' : false
      }).subscribe(getval =>{
        console.log(getval);
        alert("User disabled for login");
      });
  }
  logoutAdmin(){
    localStorage.removeItem('value');
    console.log("logging out");
    this.router.navigateByUrl('adminlogin');
    
  }
  

}
