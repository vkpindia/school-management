import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OnboardLayoutComponent } from './onboard-layout.component';

describe('OnboardLayoutComponent', () => {
  let component: OnboardLayoutComponent;
  let fixture: ComponentFixture<OnboardLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
