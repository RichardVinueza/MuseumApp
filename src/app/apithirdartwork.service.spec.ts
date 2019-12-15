import { TestBed } from '@angular/core/testing';

import { ApithirdartworkService } from './apithirdartwork.service';

describe('ApithirdartworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApithirdartworkService = TestBed.get(ApithirdartworkService);
    expect(service).toBeTruthy();
  });
});
