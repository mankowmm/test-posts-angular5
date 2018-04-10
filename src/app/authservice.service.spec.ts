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


  it('should fail isUserNameValid method', inject([AuthserviceService], (service: AuthserviceService) => {
    expect(service.isUserNameValid('a')).toBeFalsy();
    expect(service.isUserNameValid('abcd')).toBeFalsy();
  }));

  it('should pass isUserNameValid method', inject([AuthserviceService], (service: AuthserviceService) => {
    expect(service.isUserNameValid('abcda')).toBeTruthy();
  }));

  it('should fail isPasswordValid method', inject([AuthserviceService], (service: AuthserviceService) => {
    expect(service.isPasswordValid('test')).toBeFalsy();
    expect(service.isPasswordValid('1234')).toBeFalsy();
    expect(service.isPasswordValid('T1234')).toBeFalsy();
  }));

  it('should pass isPasswordValid method', inject([AuthserviceService], (service: AuthserviceService) => {
    expect(service.isPasswordValid('Test12345')).toBeTruthy();
  }));
});
