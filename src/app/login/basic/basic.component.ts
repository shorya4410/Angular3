import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  goToAlogin(){
    this.router.navigateByUrl('adminlogin');
  }
  goToUlogin(){
    this.router.navigateByUrl('userlogin');
  }

}
