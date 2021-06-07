import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeachersEditComponent } from './teachers-edit.component';

describe('TeachersEditComponent', () => {
  let component: TeachersEditComponent;
  let fixture: ComponentFixture<TeachersEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
