import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentProgramEditComponent } from './department-program-edit.component';

describe('DepartmentProgramEditComponent', () => {
  let component: DepartmentProgramEditComponent;
  let fixture: ComponentFixture<DepartmentProgramEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentProgramEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentProgramEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
