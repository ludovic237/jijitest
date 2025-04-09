import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmailPasswordComponent } from './register-email-password.component';

describe('RegisterEmailPasswordComponent', () => {
  let component: RegisterEmailPasswordComponent;
  let fixture: ComponentFixture<RegisterEmailPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterEmailPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEmailPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
