import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReitComponent } from './add-reit.component';

describe('AddReitComponent', () => {
  let component: AddReitComponent;
  let fixture: ComponentFixture<AddReitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
