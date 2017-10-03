import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  load() {
    return this.http.get('https://jsonbin.org/yizhu/forms')
    .map(x => {
      return x.json()
    })
  }

  save(data) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'token 81fe319d-9e72-4608-9957-6477a9e0ab87'
    });
    let options = new RequestOptions({
      headers: headers
    })

    this.http.post('https://jsonbin.org/yizhu/forms', data, options)
      .toPromise()      
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
