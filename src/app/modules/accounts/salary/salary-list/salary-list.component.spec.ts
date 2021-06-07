import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SalaryListComponent } from './salary-list.component';

describe('SalaryListComponent', () => {
  let component: SalaryListComponent;
  let fixture: ComponentFixture<SalaryListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
