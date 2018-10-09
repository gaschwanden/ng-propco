import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Reit } from '../_models/reit.model';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
  email: String;
  reits: Reit[];

  constructor() {
    this.email = localStorage.getItem('currentUser');
  }

  ngOnInit() {
    this.reits = [];
  }
}
