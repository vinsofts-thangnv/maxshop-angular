import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogpostComponent } from './blogpost.component';
import { SharedModule } from '../../shared/shared.module';


const routesConfig: Routes = [
  { path: '', component: BlogpostComponent }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routesConfig)
  ],
  declarations: [
    BlogpostComponent
  ]
})
export class BlogpostModule { }
