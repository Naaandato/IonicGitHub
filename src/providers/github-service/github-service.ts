import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';


import { User } from "../../models/user";
import { USER_LIST } from "../../mocks/user.mocks";
import { Repository } from "../../models/repository";
import { REPOSITORY_LIST} from "../../mocks/repository.mock"

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  private baseUrl: string = "http://api.github.com/users";
  private reposUrl: string = "repos";

  constructor(private http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
      .do((data: Response) => console.log(data))
      .map((data: Response) => data.json())
      .do((data: Response) => console.log(data))
      .catch((error: Response) => Observable.throw(error.json().error || "Server error."));
  }

  getRepositoryInformation(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
      .do((data: Response) => console.log(data))
      .map((data: Response) => data.json())
      .do((data: Response) => console.log(data))
      .catch((error: Response) => Observable.throw(error.json().error || "Server error."));
  }

  /*
  Finding the username from within USER_LIST, equal to the Username passed in.
  Returning the results as an Observable.
   */
  mockGetUserInformation(username): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

  mockGetRepositoryInformation(username): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
  }

}
