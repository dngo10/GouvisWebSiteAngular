import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineGridComponent } from './magazine-grid.component';

describe('MagazineGridComponent', () => {
  let component: MagazineGridComponent;
  let fixture: ComponentFixture<MagazineGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazineGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
