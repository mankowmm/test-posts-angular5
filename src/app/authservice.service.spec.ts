import { TestBed, inject } from '@angular/core/testing';
import { AuthserviceService } from './authservice.service';

describe('AuthserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthserviceService]
    });
  });

  it('should be created', inject([AuthserviceService], (service: AuthserviceService) => {
    expect(service).toBeTruthy();
  }));


  it('given wrong username expect method isUserNameValid fail', inject([AuthserviceService], (service: AuthserviceService) => {
    expect(service.isUserNameValid(null)).toBeFalsy();
    expect(service.isUserNameValid('')).toBeFalsy();
    expect(service.isUserNameValid('a')).toBeFalsy();
    expect(service.isUserNameValid('abcd')).toBeFalsy();
  }));

  it('given correct username expect method isUserNameValid pass', inject([AuthserviceService], (service: AuthserviceService) => {
    expect(service.isUserNameValid('abcda')).toBeTruthy();
  }));

  it('given wrong password expect method isPasswordValid fail', inject([AuthserviceService], (service: AuthserviceService) => {
    expect(service.isPasswordValid(null)).toBeFalsy();
    expect(service.isPasswordValid('')).toBeFalsy();
    expect(service.isPasswordValid('test')).toBeFalsy();
    expect(service.isPasswordValid('1234')).toBeFalsy();
    expect(service.isPasswordValid('T1234')).toBeFalsy();
  }));

  it('given correct password expect method isPasswordValid pass', inject([AuthserviceService], (service: AuthserviceService) => {
    expect(service.isPasswordValid('Test12345')).toBeTruthy();
  }));
});
