import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  /*
  getUser(id: number):User {
    return this.http.get<User>(id);
  }
  */
  constructor(
    private http: HttpClient,) { }
}
