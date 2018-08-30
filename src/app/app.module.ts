import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

const routesConfig: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'home1', loadChildren: './pages/home1/home1.module#Home1Module' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartModule' },
  { path: 'checkout', loadChildren: './pages/checkout/checkout.module#CheckoutModule' },
  { path: 'shop', loadChildren: './pages/shop/shop.module#ShopModule' },
  { path: 'shop1', loadChildren: './pages/shop1/shop1.module#Shop1Module' },
  { path: 'blog', loadChildren: './pages/blog/blog.module#BlogModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactModule' },
];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
