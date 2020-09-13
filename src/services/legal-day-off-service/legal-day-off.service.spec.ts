import { TestBed } from "@angular/core/testing";

import { LegalDayOffService } from "./legal-day-off.service";

describe("LegaldayOffService", () => {
  let service: LegalDayOffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalDayOffService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
