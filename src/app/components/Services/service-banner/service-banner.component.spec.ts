import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBannerComponent } from './service-banner.component';

describe('ServiceBannerComponent', () => {
  let component: ServiceBannerComponent;
  let fixture: ComponentFixture<ServiceBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
