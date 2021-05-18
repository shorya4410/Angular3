import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.css']
})
export class EmailVerifyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public sendEmail(e:Event) {
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
