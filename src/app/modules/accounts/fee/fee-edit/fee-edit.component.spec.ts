import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeeEditComponent } from './fee-edit.component';

describe('FeeEditComponent', () => {
  let component: FeeEditComponent;
  let fixture: ComponentFixture<FeeEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
