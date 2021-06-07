import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TermAddComponent } from './term-add.component';

describe('TermAddComponent', () => {
  let component: TermAddComponent;
  let fixture: ComponentFixture<TermAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TermAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
