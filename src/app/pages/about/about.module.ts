import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';

const routesConfig: Routes = [
  { path: '', component: AboutComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routesConfig)
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
