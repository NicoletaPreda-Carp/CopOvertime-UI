import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalDayOffEditComponent } from './legal-day-off-edit.component';

describe('LegalDayOffEditComponent', () => {
  let component: LegalDayOffEditComponent;
  let fixture: ComponentFixture<LegalDayOffEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalDayOffEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalDayOffEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
