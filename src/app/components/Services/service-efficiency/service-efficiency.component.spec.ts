import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEfficiencyComponent } from './service-efficiency.component';

describe('ServiceEfficiencyComponent', () => {
  let component: ServiceEfficiencyComponent;
  let fixture: ComponentFixture<ServiceEfficiencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEfficiencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEfficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
