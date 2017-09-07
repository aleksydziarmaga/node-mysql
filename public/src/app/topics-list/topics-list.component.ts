import { Component, OnInit } from '@angular/core';

import {Topic} from './topic/topic';
import {TopicService} from './topic.service';

@Component({
  selector: 'app-topics-list',
  template: `
    <div class="grid grid-pad">
      <a *ngFor="let topic of topics" class="list-item" [routerLink] = "['/topic', topic.id]">
        {{topic.topic_name}}
      </a>
    </div>
  `,
  styleUrls: ['./topics-list.component.css']
})
export class TopicsListComponent implements OnInit {
  topics: Topic[];
  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.topicService.getTopics()
      .then(data => this.topics = data);
  }

}
