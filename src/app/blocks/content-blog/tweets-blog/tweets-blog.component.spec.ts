import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsBlogComponent } from './tweets-blog.component';

describe('TweetsBlogComponent', () => {
  let component: TweetsBlogComponent;
  let fixture: ComponentFixture<TweetsBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
