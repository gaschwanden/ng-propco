import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Reit } from '../_models/reit.model';

@Component({
  selector: 'app-add-reit',
  templateUrl: './add-reit.component.html',
  styleUrls: ['./add-reit.component.css']
})
export class AddReitComponent implements OnInit {
  reitFrm = this.frmBldr.group({
    revenue: ['', Validators.required],
    expense: ['', Validators.required],
    asset: ['Choose asset', Validators.required]
  });

  constructor(private frmBldr: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    alert(JSON.stringify(this.reitFrm.value));
  }
}
