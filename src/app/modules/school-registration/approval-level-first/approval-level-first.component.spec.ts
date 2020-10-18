import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalLevelFirstComponent } from './approval-level-first.component';

describe('ApprovalLevelFirstComponent', () => {
  let component: ApprovalLevelFirstComponent;
  let fixture: ComponentFixture<ApprovalLevelFirstComponent>;

  beforeEach(async(() => {
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
