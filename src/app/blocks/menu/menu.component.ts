import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  urlActive = '';

  constructor(private router: Router) {
    this.urlActive = this.router.url;
  }
  ngOnInit() {
  }
}
