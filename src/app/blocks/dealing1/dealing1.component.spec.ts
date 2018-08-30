import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dealing1Component } from './dealing1.component';

describe('Dealing1Component', () => {
  let component: Dealing1Component;
  let fixture: ComponentFixture<Dealing1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dealing1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dealing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
