import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private functionUrl =
    'https://functionb2cauthdemo.azurewebsites.net/api/HttpTriggerExample';

  constructor(private http: HttpClient) {}

  getGreeting() {
    return this.http.get(`${this.functionUrl}`, { responseType: 'text' });
  }
}
