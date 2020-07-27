import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user: User = {
    id: 1,
    name: "john",
    password: "best"
  };
  

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.getUser();
  
  }
  
  getUser(): void {
    this.userService.getUser()
    .subscribe(user => this.user =user);
  }

  
}
