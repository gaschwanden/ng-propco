import { TestBed } from '@angular/core/testing';

import { ReitService } from './reit.service';

describe('ReitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReitService = TestBed.get(ReitService);
    expect(service).toBeTruthy();
  });
});
