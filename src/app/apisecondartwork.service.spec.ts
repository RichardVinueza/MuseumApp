import { TestBed } from '@angular/core/testing';

import { ApisecondartworkService } from './apisecondartwork.service';

describe('ApisecondartworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApisecondartworkService = TestBed.get(ApisecondartworkService);
    expect(service).toBeTruthy();
  });
});
