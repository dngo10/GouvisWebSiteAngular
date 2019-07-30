import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesWordsComponent } from './services-words.component';

describe('ServicesWordsComponent', () => {
  let component: ServicesWordsComponent;
  let fixture: ComponentFixture<ServicesWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
