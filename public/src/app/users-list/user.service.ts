import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './user/user';

@Injectable()
export class UserService {
  private usersUrl = 'http://localhost:3333';

  constructor( private http: Http) { }

  getUsers(): Promise<User[]> {
    return this.http.get(`${this.usersUrl}/users`)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(err => console.error(err));
  }
    getUser(id): Promise<User> {
      return this.http.get(`${this.usersUrl}/user/${id}`)
        .toPromise()
        .then(response => response.json() as User)
        .catch(err => console.log(err));
    }
    getUserTopics(id): Promise<User> {
      return this.http.get(`${this.usersUrl}/user/${id}/topics`)
        .toPromise()
        .then(response => response.json())
        .catch(err => console.log(err));
    }
}
