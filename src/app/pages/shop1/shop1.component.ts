import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-shop1',
  templateUrl: './shop1.component.html',
  styleUrls: ['./shop1.component.css']
})
export class Shop1Component implements OnInit {

  constructor() { 
    $.getScript('../../../assets/js/functions.js');
  }

  ngOnInit() {
  }

}
