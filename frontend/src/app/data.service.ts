import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

const SERVER_URL: string = 'api/';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public testApi(): Observable<string> {
    return this.http.get(`${SERVER_URL}predict`, { responseType: 'text' });
}
}