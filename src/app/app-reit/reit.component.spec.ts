import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReitComponent } from './reit.component';

describe('ReitComponent', () => {
  let component: ReitComponent;
  let fixture: ComponentFixture<ReitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
