import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
    $.getScript('../../../assets/js/functions.js');
  }

  ngOnInit() {
  }

}
