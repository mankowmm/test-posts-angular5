import {Component, EventEmitter, Input, Output} from '@angular/core';
import { AuthserviceService } from '../authservice.service';

export class User {
  constructor(public username: string, public password: string) {
  }
}

@Component({
  selector: 'app-login',
  template: `
  <div class="app-login">
    <form>
      <div class="form-group">
        <label for="exampleInputLogin">Login</label>
        <input type="text" #username id="exampleInputLogin" class="form-control"/>
        <div style="color: red;">{{userNameValidationMessage}}</div>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword">Password</label>
        <input type="password" #password class="form-control"/>
        <div style="color: red;">{{passwordValidationMessage}}</div>
      </div>
      <button type="button"
              (click)="login(username.value, password.value)" class="btn btn-primary" id="login-button">Login</button>
    </form>
  </div>`,
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  private userNameValidationMessage: string;
  private passwordValidationMessage: string;
  @Output() loginSuccess = new EventEmitter<boolean>();

  constructor(private authService: AuthserviceService) {
  }

  login(username, password) {

    this.userNameValidationMessage = null;
    this.passwordValidationMessage = null;
    let isFormValid = true;

    // check if username is valid
    if (!this.authService.isUserNameValid(username)) {
      this.userNameValidationMessage = AuthserviceService.USERNAME_VALIDATION_MESSAGE;
      isFormValid = false;
    }

    // check if password is valid
    if (!this.authService.isPasswordValid(password)) {
      this.passwordValidationMessage = AuthserviceService.PASSWORD_VALIDATION_MESSAGE;
      isFormValid = false;
    }

    // if login success
    if (isFormValid) {
      this.authService.authenticateUser(username, password).then(
        () => {
          this.loginSuccess.emit(true);
        },
        () => {
          this.loginSuccess.emit(false);
        }
      );
    } else {
      this.loginSuccess.emit(false);
    }
  }
}
