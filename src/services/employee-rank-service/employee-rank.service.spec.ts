import { TestBed } from '@angular/core/testing';

import { EmployeeRankService } from './employee-rank.service';

describe('EmployeeRankService', () => {
  let service: EmployeeRankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeRankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
