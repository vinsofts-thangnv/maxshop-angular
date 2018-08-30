import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from '../home1/home1.component';
import { SharedModule } from '../../shared/shared.module';

const routerConfig: Routes = [
  { path: '', component: Home1Component }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routerConfig)
  ],
  declarations: [
    Home1Component
  ],
})
export class Home1Module { }
