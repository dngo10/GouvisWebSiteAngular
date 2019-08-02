import { Component, OnInit, OnDestroy } from '@angular/core';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit, OnDestroy{

  resizeObservable$: Observable<Event>;
  resizeSubscription: Subscription;

  ngOnInit(): void {
    this.changeSize();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription = this.resizeObservable$.subscribe(size => this.changeSize());
  }

  title = 'GouvisWebsite';

  firstClass = {
    width: "100vw"
  }

  ngOnDestroy():void{
    if(this.resizeSubscription){
      this.resizeSubscription.unsubscribe();
    }
  }


  changeSize(){
    let windowWidth:number = window.innerWidth;
    if(windowWidth >= 900){
      this.firstClass={
        width: "100vw"
      }
    } else{
        this.firstClass={
          width: "100vw"
        }    
      }
    }
}

