import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddSalaryComponent } from './add-salary.component';

describe('AddSalaryComponent', () => {
  let component: AddSalaryComponent;
  let fixture: ComponentFixture<AddSalaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
