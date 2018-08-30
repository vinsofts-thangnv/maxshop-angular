import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { SharedModule } from '../../shared/shared.module';

const routerConfig: Routes = [
  { path: '', component: CheckoutComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routerConfig)
  ],
  declarations: [
    CheckoutComponent
  ]
})
export class CheckoutModule { }
