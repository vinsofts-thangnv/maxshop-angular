import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-gird',
  templateUrl: './product-gird.component.html',
  styleUrls: ['./product-gird.component.css']
})
export class ProductGirdComponent implements OnInit {


  listproduct;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getall();
  }

  getall() {
    this.productService.getAllProduct().then(resjson => this.listproduct = resjson);
  }
}
