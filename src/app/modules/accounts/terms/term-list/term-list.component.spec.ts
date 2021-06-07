import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TermListComponent } from './term-list.component';

describe('TermListComponent', () => {
  let component: TermListComponent;
  let fixture: ComponentFixture<TermListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TermListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
