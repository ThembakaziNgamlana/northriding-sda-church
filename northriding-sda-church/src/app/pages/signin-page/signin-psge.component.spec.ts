import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninPsgeComponent } from './signin-psge.component';

describe('SigninPsgeComponent', () => {
  let component: SigninPsgeComponent;
  let fixture: ComponentFixture<SigninPsgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninPsgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninPsgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
