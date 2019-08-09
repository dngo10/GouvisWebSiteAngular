import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineElementComponent } from './magazine-element.component';

describe('MagazineElementComponent', () => {
  let component: MagazineElementComponent;
  let fixture: ComponentFixture<MagazineElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazineElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
