import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { QuoteBlockComponent } from './components/quote-block/quote-block.component';
import { GridImagesComponent } from './components/grid-images/grid-images.component';
import { HomePagePanel1Component } from './components/home-page-panel1/home-page-panel1.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoHomePageComponent } from './components/logo-home-page/logo-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    QuoteBlockComponent,
    GridImagesComponent,
    HomePagePanel1Component,
    FooterComponent,
    LogoHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
