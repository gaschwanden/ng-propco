import { TestBed } from '@angular/core/testing';

import { UserRegistryService } from './user-registry.service';

describe('UserRegistryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRegistryService = TestBed.get(UserRegistryService);
    expect(service).toBeTruthy();
  });
});
