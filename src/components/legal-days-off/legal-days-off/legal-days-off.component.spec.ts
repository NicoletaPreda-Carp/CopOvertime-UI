import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalDaysOffComponent } from './legal-days-off.component';

describe('LegalDaysOffComponent', () => {
  let component: LegalDaysOffComponent;
  let fixture: ComponentFixture<LegalDaysOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalDaysOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalDaysOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
