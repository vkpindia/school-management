import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSchedulingComponent } from './exam-scheduling.component';

describe('ExamSchedulingComponent', () => {
  let component: ExamSchedulingComponent;
  let fixture: ComponentFixture<ExamSchedulingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamSchedulingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
