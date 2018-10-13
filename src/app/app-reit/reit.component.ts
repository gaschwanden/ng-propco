import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Reit } from '../_models/reit.model';
import { ReitService } from '../_services/_web3/reit.service';

@Component({ templateUrl: 'reit.component.html' })
export class ReitComponent implements OnInit {
  email: String;
  reits = Array<Reit>();

  constructor(private reitSvc: ReitService) {
    this.email = localStorage.getItem('currentUser');
  }

  ngOnInit() {
    this.reitSvc.getReits()
    .subscribe(reit => {
      this.reits.push(reit);
    });
  }

  onRemoveReit(address: String) {
    alert('To be implemented');
  }

  onTransferReit(address: String) {
    alert('To be implemented');
  }

  onAddReit() {
    alert('To be implemented');
  }
}
