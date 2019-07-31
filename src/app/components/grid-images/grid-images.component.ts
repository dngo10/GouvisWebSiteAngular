import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-grid-images',
  templateUrl: './grid-images.component.html',
  styleUrls: ['./grid-images.component.css']
})
export class GridImagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
