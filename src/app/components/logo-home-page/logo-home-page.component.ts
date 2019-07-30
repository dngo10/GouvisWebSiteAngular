import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-home-page',
  templateUrl: './logo-home-page.component.html',
  styleUrls: ['./logo-home-page.component.css']
})
export class LogoHomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuClick(){
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("mySidenav").style.borderLeft = "#afb9b2 0vw solid";
  }

  menuClickOpen(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.borderLeft = "#afb9b2 0.5vw solid";
  }

}
