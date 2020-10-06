import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentProgramsComponent } from './department-programs.component';

describe('DepartmentProgramsComponent', () => {
  let component: DepartmentProgramsComponent;
  let fixture: ComponentFixture<DepartmentProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
