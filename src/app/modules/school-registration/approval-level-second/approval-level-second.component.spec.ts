import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApprovalLevelSecondComponent } from './approval-level-second.component';

describe('ApprovalLevelSecondComponent', () => {
  let component: ApprovalLevelSecondComponent;
  let fixture: ComponentFixture<ApprovalLevelSecondComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalLevelSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalLevelSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
