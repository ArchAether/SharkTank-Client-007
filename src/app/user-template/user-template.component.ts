import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.css']
})
export class UserTemplateComponent implements OnInit {

  user: User = {
    id: 1,
    name: "Stephen",
    password: "Test"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
