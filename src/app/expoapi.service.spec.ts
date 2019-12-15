import { TestBed } from '@angular/core/testing';

import { ExpoapiService } from './expoapi.service';

describe('ExpoapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpoapiService = TestBed.get(ExpoapiService);
    expect(service).toBeTruthy();
  });
});
