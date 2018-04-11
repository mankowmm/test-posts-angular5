import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LoginComponent, User } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthserviceService } from '../authservice.service';

describe('Component: Login', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let submitEl: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;
  let authService: AuthserviceService;
  let spy: any;

  beforeEach(() => {

    authService = new AuthserviceService();
    component = new LoginComponent(authService);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthserviceService]
    });
    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);
    // get test component from the fixture
    component = fixture.componentInstance;
    authService = TestBed.get(AuthserviceService);
    // get hooks to component elements
    submitEl = fixture.debugElement.query(By.css('button'));
    loginEl = fixture.debugElement.query(By.css('input[type=text]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
  });

  it('Given wrong login and password expect loginSuccess event emits false', () => {
    let loginSuccess: boolean;
    loginEl.nativeElement.value = '1'; // login too short
    passwordEl.nativeElement.value = 'WRONGPASSWORD_NO_NUMBER_NO_LOWERCASE'; // wrong password - no number, no lowercase
    component.loginSuccess.subscribe((value) => loginSuccess = value);
    submitEl.triggerEventHandler('click', null);
    expect(loginSuccess).toBeFalsy();
  });

  it('Given correct login and password with success auth call expect loginSuccess event emits true', () => {
    spy = spyOn(authService, 'authenticateUser').and.returnValue(Promise.resolve());
    loginEl.nativeElement.value = 'mankowtest';
    passwordEl.nativeElement.value = 'Test12345';
    let loginSuccess: boolean;
    component.loginSuccess.subscribe((value) => {
      loginSuccess = value;
    });
    submitEl.triggerEventHandler('click', null);
    expect(authService.authenticateUser).toHaveBeenCalled();
    spy.calls.mostRecent().returnValue.then(() => {
      expect(loginSuccess).toBeTruthy();
    });
  });

  it('Given correct login and password with failure auth call expect loginSuccess event emits false', () => {
    spy = spyOn(authService, 'authenticateUser').and.returnValue(Promise.reject(false));
    loginEl.nativeElement.value = 'mankowtest';
    passwordEl.nativeElement.value = 'Test12345';
    let loginSuccess: boolean;
    component.loginSuccess.subscribe((value) => {
      loginSuccess = value;
    });
    submitEl.triggerEventHandler('click', null);
    expect(authService.authenticateUser).toHaveBeenCalled();
    spy.calls.mostRecent().returnValue.then(() => {
      expect(loginSuccess).toBeFalsy();
    });
  });

});

