import { Component, OnInit } from '@angular/core';


declare const $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() {
    $.getScript('../../../assets/js/functions.js');
  }

  ngOnInit() {
  }

}
