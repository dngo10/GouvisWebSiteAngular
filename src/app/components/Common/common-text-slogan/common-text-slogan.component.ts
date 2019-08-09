import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-text-slogan',
  templateUrl: './common-text-slogan.component.html',
  styleUrls: ['./common-text-slogan.component.css']
})
export class CommonTextSloganComponent implements OnInit {
  title : string;
  content: string

  constructor() { }

  ngOnInit() {
  }

}
