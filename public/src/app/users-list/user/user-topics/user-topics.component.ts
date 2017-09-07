import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {UserService} from '../../user.service';

@Component({
  selector: 'app-user-topics',
  template: `
    <section class="user-box">
      <h3>Topics</h3>
      <a *ngFor="let userTopic of userTopics" [routerLink] = "['/topic/', userTopic.id]">{{userTopic.topic_name}}</a>
    </section>
  `,
  styleUrls: ['./user-topics.component.css']
})
export class UserTopicsComponent implements OnInit {
  userTopics: any;
  constructor(
        private userService:  UserService,
        private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((param: ParamMap) => this.userService.getUserTopics(param.get('id')))
        .subscribe(userTopics => {this.userTopics = userTopics; console.log(userTopics); });
  }

}
