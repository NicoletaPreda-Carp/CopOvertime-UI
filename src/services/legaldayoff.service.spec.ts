import { TestBed } from "@angular/core/testing";

import { LegaldayoffService } from "./legaldayoff.service";

describe("LegaldayoffService", () => {
  let service: LegaldayoffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegaldayoffService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
