import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  style_footer = '';
  ngif_footer = true;
  number_col = 0;
  constructor(private router: Router) {
    if (this.router.url === '/shop' || this.router.url === '/home1') {
      this.style_footer = 'footer-main footer-main-1 services-section container-fluid';
      this.ngif_footer = false;
      this.number_col = 1;
    } else {
      this.style_footer = 'footer-main container-fluid';
      this.ngif_footer = true;
    }
  }

  ngOnInit() {
  }

}
