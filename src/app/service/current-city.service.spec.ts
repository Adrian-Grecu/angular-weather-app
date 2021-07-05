import { TestBed } from '@angular/core/testing';

import { CurrentCityService } from './current-city.service';

describe('CurrentCityService', () => {
  let service: CurrentCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
