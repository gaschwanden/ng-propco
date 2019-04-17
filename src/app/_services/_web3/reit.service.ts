import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetService } from './asset.service';
import { Reit } from '../../_models/reit.model';

@Injectable({
  providedIn: 'root'
})
export class ReitService {

  constructor(private assetSvc: AssetService) { }

  getReits(): Observable<Reit> {
    return Observable.create(observer => {
      for (let i = 1; i <= 5; i++) {
        this.assetSvc.get(String(i))
          .subscribe(asset => {
            observer.next(Reit.instance()
              .withExpense(i * 100)
              .withRevenue(i * 1000)
              .withAsset(asset));
            observer.complete();
          });
      }
    });
  }
}
