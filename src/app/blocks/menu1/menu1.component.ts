import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {

  urlActive = '';

  constructor(private router: Router) {
    this.urlActive = this.router.url;
  }

  ngOnInit() {
  }

}
