import { TestBed } from '@angular/core/testing';

import { TestingLocationsService } from './testing-locations.service';

describe('TestingLocationsService', () => {
  let service: TestingLocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingLocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
