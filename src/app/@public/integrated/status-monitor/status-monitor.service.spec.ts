import { TestBed } from '@angular/core/testing';

import { StatusMonitorService } from './status-monitor.service';

describe('StatusMonitorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusMonitorService = TestBed.get(StatusMonitorService);
    expect(service).toBeTruthy();
  });
});
