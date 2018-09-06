import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
declare const $: any;
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
      .then((e) => {
        this.data_all = e;

        setTimeout(() => {
          if ($(".category-carousel").length) {
            $(".category-carousel").owlCarousel({
              loop: true,
              margin: 0,
              nav: false,
              dots: false,
              autoplay: false,
              responsive: {
                0: {
                  items: 1
                },
                600: {
                  items: 2
                },
                768: {
                  items: 2
                },
                1000: {
                  items: 3
                },
                1366: {
                  items: 4
                }
              }
            });
          }
        });
      })
      .catch(err => console.log(err));
  }
}
