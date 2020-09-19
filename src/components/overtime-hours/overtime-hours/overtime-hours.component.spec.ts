import { ComponentFixture, TestBed } from "@angular/core/testing";

import { OvertimeHoursComponent } from "./overtime-hours.component";

describe("OvertimeHoursComponent", () => {
  let component: OvertimeHoursComponent;
  let fixture: ComponentFixture<OvertimeHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvertimeHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OvertimeHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
