import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddResultComponent } from './add-result.component';

describe('AddResultComponent', () => {
  let component: AddResultComponent;
  let fixture: ComponentFixture<AddResultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
