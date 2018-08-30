import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimonial1Component } from './testimonial1.component';

describe('Testimonial1Component', () => {
  let component: Testimonial1Component;
  let fixture: ComponentFixture<Testimonial1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testimonial1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testimonial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
