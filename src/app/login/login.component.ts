import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { User } from '../model/user';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userModel;
  private formSubmitted: boolean;

  private userNameValidationMessage: string;
  private passwordValidationMessage: string;

  constructor(private router: Router, private authService: AuthserviceService) {
    this.userModel = new User('', '');
  }

  public fireSubmit() {
    this.formSubmitted = true;
    let isFormValid = true;

    // clear validation messages
    this.userNameValidationMessage = null;
    this.passwordValidationMessage = null;

    // check if username is valid
    if (!this.authService.isUserNameValid(this.userModel.username)) {
      this.userNameValidationMessage = AuthserviceService.USERNAME_VALIDATION_MESSAGE;
      isFormValid = false;
    }

    // check if password is valid
    if (!this.authService.isPasswordValid(this.userModel.password)) {
      this.passwordValidationMessage = AuthserviceService.PASSWORD_VALIDATION_MESSAGE;
      isFormValid = false;
    }

    // login user
    if (isFormValid) {
      this.authService.authenticateUser(this.userModel.username, this.userModel.password).then(() => {
        console.log('auth success..');
        this.router.navigate(['wall']);
      });
    }
  }

  ngOnInit() { }

}
