import { TestBed } from '@angular/core/testing';

import { CoreOverlayContainerService } from './core-overlay-container.service';

describe('CoreOverlayContainerService', () => {
  let service: CoreOverlayContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreOverlayContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
