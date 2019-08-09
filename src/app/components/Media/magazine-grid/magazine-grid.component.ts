import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import * as magazinejson from '../../../../assets/Jsons/Magazines/BuilderAndDeveloper.json';
import { element } from 'protractor';
import { MagazineElementComponent } from '../magazine-element/magazine-element.component.js';


@Component({
  selector: 'app-magazine-grid',
  templateUrl: './magazine-grid.component.html',
  styleUrls: ['./magazine-grid.component.css'],
})
export class MagazineGridComponent implements OnInit {

  magazineDict : Map<string,string>;
  thumbNailPath: string;
  items: number[];

  @ViewChildren(MagazineElementComponent) magazines : QueryList<MagazineElementComponent>;

  constructor() {
    this.items = new Array(2);
    this.items[0] = 1;
    this.items[1] = 2;
  }

  ngOnInit() {
    this.magazineDict = new Map<string,string>();

    magazinejson["default"]["data"].forEach(element => {
      if(element["key"] != "ilink" && element["key"] != "comment"){
        this.magazineDict.set(element["key"], element["value"]);
      } else if(element["key"] == "ilink"){
        this.thumbNailPath = element["value"];
      }
    });
    console.log(this.magazineDict.values + this.thumbNailPath);
    this.items = new Array(this.magazineDict.size);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    

  }

}

