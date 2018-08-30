import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsBlogComponent } from './tags-blog.component';

describe('TagsBlogComponent', () => {
  let component: TagsBlogComponent;
  let fixture: ComponentFixture<TagsBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
