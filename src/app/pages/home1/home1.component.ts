import { Component, OnInit } from '@angular/core';


declare const $: any;

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor() {
    $.getScript('../../../assets/js/functions.js');
  }

  ngOnInit() {
  }

}
