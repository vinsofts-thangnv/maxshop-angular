import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HeaderComponent } from '../blocks/header/header.component';
import { FooterComponent } from '../blocks/footer/footer.component';
import { SliderComponent } from '../blocks/slider/slider.component';
import { ServicesComponent } from '../blocks/services/services.component';
import { CategoryComponent } from '../blocks/category/category.component';
import { CollectionComponent } from '../blocks/collection/collection.component';
import { DealingComponent } from '../blocks/dealing/dealing.component';
import { TestimonialComponent } from '../blocks/testimonial/testimonial.component';
import { BlogHomeComponent } from '../blocks/bloghome/bloghome.component';
import { SellingComponent } from '../blocks/selling/selling.component';
import { ClientsComponent } from '../blocks/clients/clients.component';
import { BannerComponent } from '../blocks/banner/banner.component';
import { MenuComponent } from '../blocks/menu/menu.component';
import { Menu1Component } from '../blocks/menu1/menu1.component';
import { ProductGirdComponent } from '../blocks/product-gird/product-gird.component';
import { Product1Component } from '../blocks/product1/product1.component';
import { ProductComponent } from '../blocks/product/product.component';
import { Slider1Component } from '../blocks/slider1/slider1.component';

import { ContentBlogComponent } from '../blocks/content-blog/content-blog.component';
import { ProductBlogComponent } from '../blocks/content-blog/product-blog/product-blog.component';
import { SearchBlogComponent } from '../blocks/content-blog/search-blog/search-blog.component';
import { CategoriesBlogComponent } from '../blocks/content-blog/categories-blog/categories-blog.component';
import { LatestPostBlogComponent } from '../blocks/content-blog/latest-post-blog/latest-post-blog.component';
import { TagsBlogComponent } from '../blocks/content-blog/tags-blog/tags-blog.component';
import { TweetsBlogComponent } from '../blocks/content-blog/tweets-blog/tweets-blog.component';
import { Category1Component } from '../blocks/category1/category1.component';
import { Dealing1Component } from '../blocks/dealing1/dealing1.component';
import { Testimonial1Component } from '../blocks/testimonial1/testimonial1.component';
import { CheckoutmComponent } from '../blocks/checkoutm/checkoutm.component';
import { BlogpostComponent } from '../pages/blogpost/blogpost.component';
import { ProductSingleComponent } from '../blocks/product-single/product-single.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    MenuComponent,
    Menu1Component,
    ServicesComponent,
    CategoryComponent,
    CollectionComponent,
    DealingComponent,
    TestimonialComponent,
    BlogHomeComponent,
    SellingComponent,
    ClientsComponent,
    BannerComponent,
    Menu1Component,
    ProductGirdComponent,
    Product1Component,
    ProductComponent,
    Slider1Component,
    ContentBlogComponent,
    ProductBlogComponent,
    SearchBlogComponent,
    CategoriesBlogComponent,
    LatestPostBlogComponent,
    TagsBlogComponent,
    TweetsBlogComponent,
    Category1Component,
    Dealing1Component,
    Testimonial1Component,
    CheckoutmComponent,
    BlogpostComponent,
    ProductSingleComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    MenuComponent,
    Menu1Component,
    ServicesComponent,
    CategoryComponent,
    CollectionComponent,
    DealingComponent,
    TestimonialComponent,
    BlogHomeComponent,
    SellingComponent,
    ClientsComponent,
    BannerComponent,
    Menu1Component,
    ProductGirdComponent,
    Product1Component,
    ProductComponent,
    Slider1Component,
    ContentBlogComponent,
    ProductBlogComponent,
    SearchBlogComponent,
    CategoriesBlogComponent,
    LatestPostBlogComponent,
    TagsBlogComponent,
    TweetsBlogComponent,
    Category1Component,
    Dealing1Component,
    Testimonial1Component,
    CheckoutmComponent,
    BlogpostComponent,
    ProductSingleComponent
  ]
})
export class SharedModule { }
