import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-intro',
  templateUrl: './video-intro.component.html',
  styleUrls: ['./video-intro.component.css']
})
export class VideoIntroComponent implements OnInit {

  width: number;
  height: number;

  constructor() { }

  ngOnInit() {
    this.onResize(null);
  }

  onResize(event) {
    this.width = window.innerWidth * 90 /100;
    this.height = this.width*9/16;
  }

}
