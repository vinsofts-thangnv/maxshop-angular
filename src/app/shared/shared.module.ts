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
    CheckoutmComponent,
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
    CheckoutmComponent
  ]
})
export class SharedModule { }
