import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import {User} from './user';
import {UserService} from '../user.service';
@Component({
  selector: 'app-user',
  template: `
    <article *ngIf="user">
      <h2>{{user.name}}</h2>
      <h3>{{user.email}}</h3>
    </article>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(
        private userService:  UserService,
        private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((param: ParamMap) => this.userService.getUser(param.get('id')))
        .subscribe(user => this.user = user);
  }

}
