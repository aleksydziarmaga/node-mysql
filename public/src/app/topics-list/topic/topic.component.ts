import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic',
  template: `
    <article *ngIf="posts">
      <p *ngFor="let post of posts">{{post.body}}</p>
    </article>
  `,
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  posts: any;
  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((param: ParamMap) => this.topicService.getPosts(param.get('id')))
        .subscribe(posts => this.posts = posts);
  }

}
