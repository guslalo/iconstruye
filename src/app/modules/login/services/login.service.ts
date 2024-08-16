import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(code:string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Basic ${code}`
    });
    return this.http.post<any>('https://dev-api-login-test.azurewebsites.net/Token', {}, { headers });
  }

}
