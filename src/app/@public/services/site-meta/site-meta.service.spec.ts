import { TestBed } from '@angular/core/testing';

import { SiteMetaService } from './site-meta.service';

describe('SiteMetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiteMetaService = TestBed.get(SiteMetaService);
    expect(service).toBeTruthy();
  });
});
