import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagePanel1Component } from './home-page-panel1.component';

describe('HomePagePanel1Component', () => {
  let component: HomePagePanel1Component;
  let fixture: ComponentFixture<HomePagePanel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePagePanel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagePanel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
