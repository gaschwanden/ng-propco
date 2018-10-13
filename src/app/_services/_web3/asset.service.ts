import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from '../../_models/asset.model';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor() { }

  get(address: String): Observable<Asset> {
    return Observable.create(observer => {
        observer.next(Asset.instance()
          .withLocation('Location' + address)
          .withValue(Number(address) * 10000));
    });
  }
}
