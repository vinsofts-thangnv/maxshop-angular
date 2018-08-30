import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

const routesConfig: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'shop', loadChildren: './pages/shop/shop.module#ShopModule' },

];

import { AppComponent } from './app.component';
import { Shop1Component } from './pages/shop1/shop1.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    Shop1Component,
    CartComponent,
    ContactComponent,
    CheckoutComponent,
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
