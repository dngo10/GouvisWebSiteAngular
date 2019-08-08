import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeviceServicesComponent } from './sevice-services.component';

describe('SeviceServicesComponent', () => {
  let component: SeviceServicesComponent;
  let fixture: ComponentFixture<SeviceServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeviceServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeviceServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
