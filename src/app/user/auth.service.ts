import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  // Sets user for development purposes
  loginUser(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Tim',
      lastName: 'A'
    };
  }

  // Forces authenticated to true
  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string): void {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
