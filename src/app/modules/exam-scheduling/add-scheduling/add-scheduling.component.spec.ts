import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSchedulingComponent } from './add-scheduling.component';

describe('AddSchedulingComponent', () => {
  let component: AddSchedulingComponent;
  let fixture: ComponentFixture<AddSchedulingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSchedulingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
