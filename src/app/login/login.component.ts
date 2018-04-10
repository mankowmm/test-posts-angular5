import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { User } from '../model/user';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  @Output() loggedIn = new EventEmitter<boolean>();

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
    console.log('login.component validaiton..');
    if (isFormValid) {
      this.authService.authenticateUser(this.userModel.username, this.userModel.password).then(() => {
        console.log('auth success..');
        this.loggedIn.emit(true);
        this.router.navigate(['wall']);
      });
    } else {
      this.loggedIn.emit(false);
    }
  }

  ngOnInit() { }

}
