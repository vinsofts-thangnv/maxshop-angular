import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlogPostComponent } from './content-blog-post.component';

describe('ContentBlogPostComponent', () => {
  let component: ContentBlogPostComponent;
  let fixture: ComponentFixture<ContentBlogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentBlogPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
