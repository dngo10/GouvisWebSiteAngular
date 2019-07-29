import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoHomePageComponent } from './logo-home-page.component';

describe('LogoHomePageComponent', () => {
  let component: LogoHomePageComponent;
  let fixture: ComponentFixture<LogoHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
