import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentSummaryComponent } from './rent-summary.component';

describe('RentSummaryComponent', () => {
  let component: RentSummaryComponent;
  let fixture: ComponentFixture<RentSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
