import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() {
    $.getScript('../../../assets/js/functions.js');
  }

  ngOnInit() {
  }

}
