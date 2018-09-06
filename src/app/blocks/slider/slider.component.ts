import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SlideService } from '../../services/slide/slide.service';

declare const $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {

  listSlide;

  constructor(private slideService: SlideService) {
  }

  ngOnInit() {
    this.getallslide();
  }

  getallslide() {
    this.slideService.getAllSlide().then(resjson => this.listSlide = resjson);
    // $.getScript('../../../assets/js/functions.js');
  }

  ngAfterViewInit() {
    // $.getScript('../../../assets/js/functions.js');
  }
}
