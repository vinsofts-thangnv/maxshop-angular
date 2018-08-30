import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { BlogComponent } from './blog.component';
import { ContentBlogComponent } from '../../blocks/content-blog/content-blog.component';
import { CategoriesBlogComponent } from '../../blocks/content-blog/categories-blog/categories-blog.component';
import { LatestPostBlogComponent } from '../../blocks/content-blog/latest-post-blog/latest-post-blog.component';
import { ProductBlogComponent } from '../../blocks/content-blog/product-blog/product-blog.component';
import { SearchBlogComponent } from '../../blocks/content-blog/search-blog/search-blog.component';
import { TagsBlogComponent } from '../../blocks/content-blog/tags-blog/tags-blog.component';
import { TweetsBlogComponent } from '../../blocks/content-blog/tweets-blog/tweets-blog.component';


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
    BlogComponent,
    ContentBlogComponent,
    CategoriesBlogComponent,
    LatestPostBlogComponent,
    ProductBlogComponent,
    SearchBlogComponent,
    TagsBlogComponent,
    TweetsBlogComponent
  ]
})
export class BlogModule { }
