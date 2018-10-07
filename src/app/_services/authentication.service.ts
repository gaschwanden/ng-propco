import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<Object> {
    const user = {
      id: 'ID',
      username: 'DAGRA',
      firstName: 'Dheeraj',
      lastName: 'Agrawal',
      token: 'fake-jwt-token'
    };
    return Observable.create(observer => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      observer.next(user);
      observer.complete();
    });

    // return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username: username, password: password })
    //   .pipe(map(user => {
    //     // login successful if there's a jwt token in the response
    //     if (user && user.token) {
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //     }

    //     return user;
    //   }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
