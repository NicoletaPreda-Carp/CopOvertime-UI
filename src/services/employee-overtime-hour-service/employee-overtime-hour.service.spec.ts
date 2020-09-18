import { TestBed } from '@angular/core/testing';

import { EmployeeOvertimeHourService } from './employee-overtime-hour.service';

describe('EmployeeOvertimeHourService', () => {
  let service: EmployeeOvertimeHourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeOvertimeHourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
