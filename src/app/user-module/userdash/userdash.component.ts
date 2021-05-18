import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
  UserDataUrl = 'http://localhost:3000/userdata';
  getid:any;
  val: any = [];
  allowsearch = 0;
  searchName : any;
  url : any;
  UserNameSearch : any;
  val2:any = [];
  nameofUser : any;
  requestingUser : any;
  acceptedFriend : any;
  verifyOTP = 0;
  otp : any;
  constructor( private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getid = localStorage.getItem('Id');
    console.log(this.getid);
    this.http.get(`${this.UserDataUrl}/${this.getid}`).subscribe(datafecth =>{
      console.log(datafecth['UserName']);
      this.nameofUser = datafecth['UserName'];
      this.requestingUser = datafecth['friendRequest'];
      this.acceptedFriend = datafecth['friends'];
      console.log(this.nameofUser);
      this.val.push(datafecth);
    });
    this.http.get(`${this.UserDataUrl}`).subscribe(takedata =>{
      console.log(takedata);
      this.val2 = takedata;      
    });
  }
  acceptRequest(){
    this.http.patch(`${this.UserDataUrl}/${this.getid}`, {
      'friendRequest' : '',
      'friends' : this.requestingUser
    }).subscribe(getfresh =>{
      console.log(getfresh);
      this.router.navigateByUrl('userdash');
    });
    for (let i = 0; i < this.val2.length; i++){
      //console.log(this.val2.value);
      
      if(this.requestingUser == this.val2[i]['UserName'])
      { 
        this.http.patch(`${this.UserDataUrl}/${this.val2[i]['id']}` , {
          "friends" : this.nameofUser
        }).subscribe(getfresh2 =>{
          console.log(getfresh2);
        });  
      }
    }
  }
  signoutuser(){
    localStorage.removeItem('Id');
    this.router.navigateByUrl('userlogin');
  }
  sendingRequest(){
    console.log(this.UserNameSearch)
    
    for (let i = 0; i < this.val2.length; i++){
      //console.log(this.val2.value);
      
      if(this.UserNameSearch == this.val2[i]['UserName'])
      {
        console.log("friend found");
        
        this.http.patch<any>(`${this.UserDataUrl}/${this.val2[i]['id']}` , {
          "friendRequest" : this.nameofUser,
          "friends" : null
        }).subscribe(editdata =>{
          console.log(editdata);
        });  
      }
    }
  }
  sendRequest(){
    console.log("search friend");
    this.allowsearch = 1;
    //console.log(this.searchName);
    console.log(this.val2);
    
  }
  goToemailVerify(){
    //this.router.navigateByUrl('emailVerify');
    this.verifyOTP = 1;
  }
  getOTP(){
    this.otp = Math.floor((Math.random() * 100) + 1);
  }
  goToHome(){
    this.router.navigateByUrl('');
    localStorage.removeItem('Id');
  }

  public sendEmail(e:Event) {
    this.getOTP();
    console.log(e.target,"Line 119");
    e.preventDefault();
    
    emailjs.sendForm('service_64dgn2w', 'template_ljqjl6o', e.target as HTMLFormElement, 'user_o6gIm0cMcrBRTRYb1KfwN')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    }
}
