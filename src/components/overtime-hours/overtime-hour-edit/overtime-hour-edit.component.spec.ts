import { ComponentFixture, TestBed } from "@angular/core/testing";

import { OvertimeHourEditComponent } from "./overtime-hour-edit.component";

describe("OvertimeHourEditComponent", () => {
  let component: OvertimeHourEditComponent;
  let fixture: ComponentFixture<OvertimeHourEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvertimeHourEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OvertimeHourEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
