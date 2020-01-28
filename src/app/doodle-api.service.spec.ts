import { TestBed } from '@angular/core/testing';

import { DoodleApiService } from './doodle-api.service';

describe('DoodleApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoodleApiService = TestBed.get(DoodleApiService);
    expect(service).toBeTruthy();
  });
});
