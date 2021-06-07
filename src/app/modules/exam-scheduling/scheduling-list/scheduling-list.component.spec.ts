import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SchedulingListComponent } from './scheduling-list.component';

describe('SchedulingListComponent', () => {
  let component: SchedulingListComponent;
  let fixture: ComponentFixture<SchedulingListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
