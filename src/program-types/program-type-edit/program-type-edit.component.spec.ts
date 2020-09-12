import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramTypeEditComponent } from './program-type-edit.component';

describe('ProgramTypeEditComponent', () => {
  let component: ProgramTypeEditComponent;
  let fixture: ComponentFixture<ProgramTypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramTypeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
