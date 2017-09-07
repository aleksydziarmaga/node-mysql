import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Topic } from './topic/topic';

@Injectable()
export class TopicService {
  private topicsUrl = 'http://localhost:3333';

  constructor( private http: Http) { }

  getTopics(): Promise<Topic[]> {
    return this.http.get(`${this.topicsUrl}/topics`)
      .toPromise()
      .then(response => response.json() as Topic[])
      .catch(err => console.error(err));
  }
  getPosts(id): Promise<Topic[]> {
    return this.http.get(`${this.topicsUrl}/topic/${id}/posts`)
      .toPromise()
      .then(response => response.json())
      .catch(err => console.error(err));
  }
}
