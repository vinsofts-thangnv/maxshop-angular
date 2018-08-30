import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from '../shop/shop.component';
import { SharedModule } from '../../shared/shared.module';

const routerConfig: Routes = [
  { path: '', component: ShopComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig),
    SharedModule
  ],
  declarations: [
    ShopComponent
  ]
})
export class ShopModule { }
