import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmepTitlesComponent } from './smep-titles.component';

describe('SmepTitlesComponent', () => {
  let component: SmepTitlesComponent;
  let fixture: ComponentFixture<SmepTitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmepTitlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmepTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
