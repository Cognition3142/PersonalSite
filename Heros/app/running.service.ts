import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { SportEvent } from './sportevent';

@Injectable()
export class RunningService {

  private url = 'api/runs';  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  get(): Promise<SportEvent[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json().data as SportEvent[])
      .catch(this.handleError);
  }

  update(runevent: SportEvent): Promise<SportEvent> {
    const url = `${this.url}/${runevent.id}`;
    return this.http
      .put(url, JSON.stringify(runevent), { headers: this.headers })
      .toPromise()
      .then(() => runevent)
      .catch(this.handleError);
  }

  create(name: string, date: Date): Promise<SportEvent> {
    return this.http
      .post(this.url, JSON.stringify({ name: name, date: date }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
