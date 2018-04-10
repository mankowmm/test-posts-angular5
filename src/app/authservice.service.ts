import { Injectable } from '@angular/core';

@Injectable()
export class AuthserviceService {

  public static USERNAME_VALIDATION_MESSAGE = 'username not valid - please provide at least 8 characters';
  public static PASSWORD_VALIDATION_MESSAGE = `password not valid - please follow rules:
        password must contain 8 characters, at least one small letter, at least one capital letter, at least one number`;
  public static regexAtLeastOneLoweOneUpperOneNumber = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  private static USERNAME_STORAGE_KEY = 'mmTestAppUserName';

  constructor() { }

  public isUserNameValid (username: string) {
    if (username.length >= 5) {
      return true;
    }
    return false;
  }

  public isPasswordValid (password: string) {
    if (password.length >= 8) {
      const isRegexMatching = AuthserviceService.regexAtLeastOneLoweOneUpperOneNumber.test(password);
      if (isRegexMatching) {
        return true;
      }
    }
    return false;
  }

  public isUserLoggedIn () {
    const userNameInLocalStorage = localStorage.getItem(AuthserviceService.USERNAME_STORAGE_KEY);
    if (userNameInLocalStorage) {
      return true;
    }
    return false;
  }

  // only fake check - store in local storage
  public authenticateUser(username: string, password: string) {
    // there should be some real check of username, password in API/DB etc..
    // for this demo app it's skipped - just pretending async checking etc..
    // assume only success for demo purp..
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        localStorage.setItem(AuthserviceService.USERNAME_STORAGE_KEY, username);
        resolve();
      }, 500);
    });
  }

  // only fake check - store in local storage
  public logoutUser() {
    // for demo app just remove item from local Storage
    // assume only success for demo purp..
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        localStorage.removeItem(AuthserviceService.USERNAME_STORAGE_KEY);
        resolve();
      }, 300);
    });
  }


}
