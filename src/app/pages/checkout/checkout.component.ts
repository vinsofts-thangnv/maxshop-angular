import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() {
    $.getScript('../../../assets/js/functions.js');
   }

  ngOnInit() {
  }

}
