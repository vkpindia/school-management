import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeTransactionComponent } from './fee-transaction.component';

describe('FeeTransactionComponent', () => {
  let component: FeeTransactionComponent;
  let fixture: ComponentFixture<FeeTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
