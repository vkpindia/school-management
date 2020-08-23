import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryTransactionsComponent } from './salary-transactions.component';

describe('SalaryTransactionsComponent', () => {
  let component: SalaryTransactionsComponent;
  let fixture: ComponentFixture<SalaryTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
