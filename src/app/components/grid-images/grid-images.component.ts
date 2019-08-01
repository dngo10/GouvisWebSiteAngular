import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-grid-images',
  templateUrl: './grid-images.component.html',
  styleUrls: ['./grid-images.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class GridImagesComponent implements OnInit {

  offset: number =1000; //this equals to height of viewport
  offsetString : string;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    AOS.init();
  }



  onResize(event){
    this.offset = window.innerHeight;
    this.offsetString = "data-aos=\"zoom-in\" data-aos-delay=\"" + this.offset + "\"";
    AOS.refresh();
  }

}
