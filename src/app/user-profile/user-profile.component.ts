import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = {
    id: 1,
    name: 'Stephen',
    password: "help"
  }

  constructor() { }

  ngOnInit(): void {
  }

}