import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private router: Router) { }

  onLoginSuccess($event) {
    console.log($event);
    if ($event) {
      this.router.navigate(['wall']);
    } else {
      console.error('login failed..');
    }
  }
  ngOnInit() {
  }

}
