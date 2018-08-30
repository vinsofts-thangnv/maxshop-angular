import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { BlogComponent } from './blog.component';

const routesConfig: Routes = [
  { path: '', component: BlogComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesConfig),
    SharedModule
  ],
  declarations: [
    BlogComponent
  ]
})
export class BlogModule { }
