import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApprovalLevelFirstComponent } from './approval-level-first.component';

describe('ApprovalLevelFirstComponent', () => {
  let component: ApprovalLevelFirstComponent;
  let fixture: ComponentFixture<ApprovalLevelFirstComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalLevelFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalLevelFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
