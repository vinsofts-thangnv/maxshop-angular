import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

const routesConfig: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'home1', loadChildren: './pages/home1/home1.module#Home1Module' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartModule' },
  { path: 'checkout', loadChildren: './pages/checkout/checkout.module#CheckoutModule' },
  { path: '404', loadChildren: './pages/erro404/erro404.module#Erro404Module' },
  { path: 'shop', loadChildren: './pages/shop/shop.module#ShopModule' },
  { path: 'shop1', loadChildren: './pages/shop1/shop1.module#Shop1Module' },
  { path: 'blog', loadChildren: './pages/blog/blog.module#BlogModule' },
  { path: 'blogpost', loadChildren: './pages/blogpost/blogpost.module#BlogpostModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactModule' },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routesConfig)
  ],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
