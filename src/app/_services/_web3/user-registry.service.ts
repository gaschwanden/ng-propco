import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as TruffleContract from 'truffle-contract';
import { Web3Service } from './web3.service';

import * as UserRegistry from '../../../../build/contracts/UserRegistry.json';

@Injectable({
  providedIn: 'root'
})
export class UserRegistryService {
  USER_REGISTRY = TruffleContract(UserRegistry);

  constructor(private web3Svc: Web3Service) {
    // this.USER_REGISTRY.setProvider(this.web3Svc.currentProvider());
  }

  userRegistry() {
    return this.USER_REGISTRY.deployed();
  }

  authenticate(email, password): Observable<boolean> {
    return Observable.create(observer => {
      this.userRegistry()
        .then(registry => registry.isRegistered(email, password))
        .then(authenticated => {
          observer.next(authenticated);
          observer.complete();
        })
        .catch(error => observer.err(error));
    });
  }
}
