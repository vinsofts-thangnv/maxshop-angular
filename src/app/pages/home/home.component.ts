import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {



  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // $.getScript('../../../assets/js/functions.js');
  }
}
