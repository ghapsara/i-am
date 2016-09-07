import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Project } from './project';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProjectService {
  
  private url = "../app/data/projects/projects.json";

  constructor(private http: Http) { }

  getAll(): Observable<Project[]> {
    return this.http.get(this.url)
      .map(response => <Project[]>response.json())
      // .do(data => console.log("All: " + JSON.stringify(data)))
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
