import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertimeHoursPerEmployeeComponent } from './overtime-hours-per-employee.component';

describe('OvertimeHoursPerEmployeeComponent', () => {
  let component: OvertimeHoursPerEmployeeComponent;
  let fixture: ComponentFixture<OvertimeHoursPerEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvertimeHoursPerEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OvertimeHoursPerEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
