import { Component, OnInit, } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() {
    $.getScript('../../../assets/js/functions.js');
  }

  ngOnInit() {
  }
}
