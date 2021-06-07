import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParentsListComponent } from './parents-list.component';

describe('ParentsListComponent', () => {
  let component: ParentsListComponent;
  let fixture: ComponentFixture<ParentsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
