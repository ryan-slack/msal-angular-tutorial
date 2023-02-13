import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private functionUrl = 'http://localhost:7097/api/HttpTriggerExample';

  constructor(private http: HttpClient) {}

  getGreeting() {
    return this.http.get(`${this.functionUrl}`, { responseType: 'text' });
  }
}
