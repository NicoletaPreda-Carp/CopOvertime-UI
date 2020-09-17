import { TestBed } from '@angular/core/testing';

import { ValidNumberOfDaysService } from './valid-number-of-days.service';

describe('ValidNumberOfDaysService', () => {
  let service: ValidNumberOfDaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidNumberOfDaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
