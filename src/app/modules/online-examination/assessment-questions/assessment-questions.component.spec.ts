import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentQuestionsComponent } from './assessment-questions.component';

describe('AssessmentQuestionsComponent', () => {
  let component: AssessmentQuestionsComponent;
  let fixture: ComponentFixture<AssessmentQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
