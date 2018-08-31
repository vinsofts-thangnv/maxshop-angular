import { Component, OnInit } from '@angular/core';


declare const $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() {
    $.getScript('../../../assets/js/functions.js');
  }

  ngOnInit() {
  }
}
