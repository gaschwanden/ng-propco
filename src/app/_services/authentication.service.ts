import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegistryService } from './_web3/user-registry.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private userRegistrySvc: UserRegistryService) { }

  login(email: string, password: string): Observable<Object> {
    // return this.userRegistrySvc.authenticate(email, password)
    //   .pipe(map(autheticated => {
    //     if (autheticated) {
    //       localStorage.setItem('currentUser', email);
    //     }
    //     return email;
    //   }));
    localStorage.setItem('currentUser', email);
    return Observable.create(observer => observer.next(email));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
