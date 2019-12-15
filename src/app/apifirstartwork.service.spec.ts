import { TestBed } from '@angular/core/testing';

import { ApifirstartworkService } from './apifirstartwork.service';

describe('ApifirstartworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApifirstartworkService = TestBed.get(ApifirstartworkService);
    expect(service).toBeTruthy();
  });
});
