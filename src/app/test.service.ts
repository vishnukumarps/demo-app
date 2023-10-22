import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http.get(`https://api.slingacademy.com/v1/sample-data/users`);
    
  }

}
