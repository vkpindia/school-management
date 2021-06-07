import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventsAddComponent } from './events-add.component';

describe('EventsAddComponent', () => {
  let component: EventsAddComponent;
  let fixture: ComponentFixture<EventsAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
