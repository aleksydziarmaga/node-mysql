import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './user/user';

@Injectable()
export class UserService {
  private usersUrl = 'http://localhost:3333/users';

  constructor( private http: Http) { }

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(err => console.error(err));
  }
}
