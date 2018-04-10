import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.less']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private authService: AuthserviceService) { }

  logoutUser() {
    this.authService.logoutUser().then(() => {
      this.router.navigate(['login']);
    });
  }

  ngOnInit() {
  }

}
