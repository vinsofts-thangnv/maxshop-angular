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
import { CheckoutmComponent } from '../blocks/checkoutm/checkoutm.component';
import { Category1Component } from '../blocks/category1/category1.component';
import { Dealing1Component } from '../blocks/dealing1/dealing1.component';
import { Testimonial1Component } from '../blocks/testimonial1/testimonial1.component';
import { ProductSingleComponent } from '../blocks/product-single/product-single.component';
import { Main404Component } from '../blocks/main404/main404.component';
import { Blog1homeComponent } from '../blocks/blog1home/blog1home.component';
import { Selling1Component } from '../blocks/selling1/selling1.component';
import { Collection1Component } from '../blocks/collection1/collection1.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import {NgxPageScrollModule} from 'ngx-page-scroll';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ScrollToModule.forRoot(),
    NgxPageScrollModule
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
    CheckoutmComponent,
    Category1Component,
    Dealing1Component,
    Testimonial1Component,
    Main404Component,
    ProductSingleComponent,
    Blog1homeComponent,
    Selling1Component,
    Collection1Component
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
    CheckoutmComponent,
    Category1Component,
    Dealing1Component,
    Testimonial1Component,
    CheckoutmComponent,
    ProductSingleComponent,
    Main404Component,
    Blog1homeComponent,
    Selling1Component,
    Collection1Component
  ]
})
export class SharedModule { }
