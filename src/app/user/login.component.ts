import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  templateUrl: 'login.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        font-size: 12px;
        padding-left: 10px;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseoverLogin: boolean;
  loginInvalid: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  // Simulated logging in user passport. Passwords are not validated and username should be 'johnpapa'.
  login(formValues): void {
    this.authService
      .loginUser(formValues.userName, formValues.password)
      .subscribe((resp: Object | boolean) => {
        if (!resp) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(['events']);
        }
      });
  }

  cancel(): void {
    this.router.navigate(['events']);
  }
}
