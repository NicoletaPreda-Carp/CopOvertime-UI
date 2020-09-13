import { TestBed } from "@angular/core/testing";

import { OvertimeHoursService } from "./overtime-hours-service";

describe("OvertimeHoursServiceService", () => {
  let service: OvertimeHoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OvertimeHoursService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
