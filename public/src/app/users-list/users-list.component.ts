import { Component, OnInit } from '@angular/core';

import {User} from './user/user';
import {UserService} from './user.service';

@Component({
  selector: 'app-users-list',
  template: `
    <div class="grid grid-pad">
      <a *ngFor="let user of users" class="list-item">
        {{user.name}}
      </a>
    </div>
  `,
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .then(data => this.users = data);
  }

}
