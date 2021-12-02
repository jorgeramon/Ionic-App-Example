import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${environment.api}/users`, {
      user: { username, email, password },
    });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.api}/users/login`, {
      user: { email, password },
    });
  }
}
