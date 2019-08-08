import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTextSloganComponent } from './common-text-slogan.component';

describe('CommonTextSloganComponent', () => {
  let component: CommonTextSloganComponent;
  let fixture: ComponentFixture<CommonTextSloganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonTextSloganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonTextSloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
