import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGirdComponent } from './product-gird.component';

describe('ProductGirdComponent', () => {
  let component: ProductGirdComponent;
  let fixture: ComponentFixture<ProductGirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
