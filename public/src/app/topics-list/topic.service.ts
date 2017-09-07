import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Topic } from './topic';

@Injectable()
export class TopicService {
  private topicsUrl = 'http://localhost:3333/topics';

  constructor( private http: Http) { }

  getTopics(): Promise<Topic[]> {
    return this.http.get(this.topicsUrl)
      .toPromise()
      .then(response => response.json() as Topic[])
      .catch(err => console.error(err));
  }
}
