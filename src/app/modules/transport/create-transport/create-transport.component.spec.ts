import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateTransportComponent } from './create-transport.component';

describe('CreateTransportComponent', () => {
  let component: CreateTransportComponent;
  let fixture: ComponentFixture<CreateTransportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
