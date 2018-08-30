import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPostBlogComponent } from './latest-post-blog.component';

describe('LatestPostBlogComponent', () => {
  let component: LatestPostBlogComponent;
  let fixture: ComponentFixture<LatestPostBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestPostBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestPostBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
