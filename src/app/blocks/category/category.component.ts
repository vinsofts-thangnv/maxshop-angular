import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  data_all: any;
  n = 0;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.categoryService.getAllCategories()
      .then(resJson => console.log(this.data_all = resJson))
      .catch(err => console.log(err));
  }
}
