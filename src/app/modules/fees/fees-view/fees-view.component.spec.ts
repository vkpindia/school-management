import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeesViewComponent } from './fees-view.component';

describe('FeesViewComponent', () => {
  let component: FeesViewComponent;
  let fixture: ComponentFixture<FeesViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
