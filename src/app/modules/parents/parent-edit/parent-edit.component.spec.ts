import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParentEditComponent } from './parent-edit.component';

describe('ParentEditComponent', () => {
  let component: ParentEditComponent;
  let fixture: ComponentFixture<ParentEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
