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
import { FirstClassComponent } from './components/HomePage/first-class/first-class.component';
import { ServicesWordsComponent } from './components/HomePage/services-words/services-words.component';
import { CardsComponent } from './components/HomePage/cards/cards.component';
import { VideoIntroComponent } from './components/HomePage/video-intro/video-intro.component';
import { MainComponent } from './components/HomePage/main/main.component';
import { ServiceMainComponent } from './components/Services/service-main/service-main.component';
import { ServiceBannerComponent } from './components/Services/service-banner/service-banner.component';
import { ServiceEfficiencyComponent } from './components/Services/service-efficiency/service-efficiency.component';
import { SmepTitlesComponent } from './components/Services/smep-titles/smep-titles.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    QuoteBlockComponent,
    GridImagesComponent,
    HomePagePanel1Component,
    FooterComponent,
    LogoHomePageComponent,
    FirstClassComponent,
    ServicesWordsComponent,
    CardsComponent,
    VideoIntroComponent,
    MainComponent,
    ServiceMainComponent,
    ServiceBannerComponent,
    ServiceEfficiencyComponent,
    SmepTitlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
