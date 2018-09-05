import { Component, OnInit } from '@angular/core';
import { SlideService } from '../../services/slide/slide.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  listSlide;

  constructor(private slideService: SlideService) {
  }

  ngOnInit() {
    this.getallslide();
  }

  getallslide() {
    this.slideService.getAllSlide().then(resjson => this.listSlide = resjson);
  }
}
