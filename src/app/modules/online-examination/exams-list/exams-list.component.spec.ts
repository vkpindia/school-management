import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExamsListComponent } from './exams-list.component';

describe('ExamsListComponent', () => {
  let component: ExamsListComponent;
  let fixture: ComponentFixture<ExamsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
