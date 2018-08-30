import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { SharedModule } from '../../shared/shared.module';

const routesConfig: Routes = [
  { path: '', component: CartComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routesConfig)
  ],
  declarations: [
    CartComponent
  ]
})
export class CartModule { }
