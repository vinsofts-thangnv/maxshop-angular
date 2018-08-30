import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutmComponent } from './checkoutm.component';

describe('CheckoutmComponent', () => {
  let component: CheckoutmComponent;
  let fixture: ComponentFixture<CheckoutmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
