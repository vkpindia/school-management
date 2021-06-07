import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParentDetailsComponent } from './parent-details.component';

describe('ParentDetailsComponent', () => {
  let component: ParentDetailsComponent;
  let fixture: ComponentFixture<ParentDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
