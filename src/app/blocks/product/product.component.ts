import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  numberpage = 1;

  constructor() { }

  ngOnInit() {
  }

  nextpage() {
    this.numberpage = this.numberpage + 1;
  }
  backpage() {
    if (this.numberpage > 1) {
      this.numberpage = this.numberpage - 1;
    }
  }
}
