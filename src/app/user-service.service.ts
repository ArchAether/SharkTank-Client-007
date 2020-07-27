import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  getUser():Observable<User> {
    return this.http.get<User>("https://starter-dreamer-project.glitch.me/user");
  }
  
  constructor(
    private http: HttpClient,) { }
}
