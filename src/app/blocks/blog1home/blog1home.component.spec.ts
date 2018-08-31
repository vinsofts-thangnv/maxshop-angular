import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog1homeComponent } from './blog1home.component';

describe('Blog1homeComponent', () => {
  let component: Blog1homeComponent;
  let fixture: ComponentFixture<Blog1homeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog1homeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog1homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
