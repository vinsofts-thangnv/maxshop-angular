import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  style_header = '';
  style_top_header = '';
  constructor(private router: Router) {
    if (this.router.url === '/shop' || this.router.url === '/home1') {
      this.style_header = 'header-section header-section-1 container-fluid no-padding';
      this.style_top_header = 'top-header top-header1 container-fluid no-padding';
    } else {
      this.style_header = 'header-section container-fluid no-padding';
      this.style_top_header = 'top-header container-fluid no-padding';
    }
  }
  ngOnInit() {
  }

}
