import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-gird',
  templateUrl: './product-gird.component.html',
  styleUrls: ['./product-gird.component.css']
})
export class ProductGirdComponent implements OnInit {

  @Input() numberpage: number;

  listproduct;

  constructor(private productService: ProductService) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    this.getPageProduct();
  }

  ngOnInit() {
  }

  getPageProduct() {
    this.productService.getPageProduct(this.numberpage).then(resjson => this.listproduct = resjson);
  }
}
