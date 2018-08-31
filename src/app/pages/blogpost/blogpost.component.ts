import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  constructor() {
    $.getScript('../../../assets/js/functions.js');
   }

  ngOnInit() {
  }

}
