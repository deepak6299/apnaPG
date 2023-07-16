import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userDetails } from 'src/app/data-types';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

constructor(private _user:UserService,private route:Router){}

// post method called

postUsers(Data:userDetails){
  this._user.postUser(Data)
}

  showLoginForm: boolean = true;
  showSignupForm: boolean = false;
  
  showLogin(): void {
    this.showLoginForm = true;
    this.showSignupForm = false;
  }
  
  showSignup(): void {
    this.showLoginForm = false;
    this.showSignupForm = true;
  }
  


}
