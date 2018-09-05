import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

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
