import { TestBed } from '@angular/core/testing';

import { InitializeService } from './initialize.service';

describe('InitializeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitializeService = TestBed.get(InitializeService);
    expect(service).toBeTruthy();
  });
});
