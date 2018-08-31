import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Selling1Component } from './selling1.component';

describe('Selling1Component', () => {
  let component: Selling1Component;
  let fixture: ComponentFixture<Selling1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Selling1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Selling1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
