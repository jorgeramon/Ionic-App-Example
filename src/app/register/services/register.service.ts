import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) {}

  registerAPI(
    username: string,
    email: string,
    password: string
  ): Observable<any> {
    return this.http.post(`${environment.api}/users`, {
      user: { username, email, password },
    });
  }
}
