import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/HomePage/banner/banner.component';
import { QuoteBlockComponent } from './components/quote-block/quote-block.component';
import { GridImagesComponent } from './components/HomePage/grid-images/grid-images.component';
import { HomePagePanel1Component } from './components/HomePage/home-page-panel1/home-page-panel1.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoHomePageComponent } from './components/header/logo-home-page.component';
import { FirstClassComponent } from './components/HomePage/first-class/first-class.component';
import { ServicesWordsComponent } from './components/HomePage/services-words/services-words.component';
import { CardsComponent } from './components/HomePage/cards/cards.component';
import { VideoIntroComponent } from './components/HomePage/video-intro/video-intro.component';
import { MainComponent } from './components/HomePage/main/main.component';
import { ServiceMainComponent } from './components/Services/service-main/service-main.component';
import { ServiceBannerComponent } from './components/Services/service-banner/service-banner.component';
import { ServiceEfficiencyComponent } from './components/Services/service-efficiency/service-efficiency.component';
import { SmepTitlesComponent } from './components/Services/smep-titles/smep-titles.component';
import { SeviceServicesComponent } from './components/Services/sevice-services/sevice-services.component';
import { CommonBannerComponent } from './components/Common/common-banner/common-banner.component';
import { MediaMainComponent } from './components/Media/media-main/media-main.component';
import { CommonTextSloganComponent } from './components/Common/common-text-slogan/common-text-slogan.component';
import { MagazineGridComponent } from './components/Media/magazine-grid/magazine-grid.component';
import { MagazineElementComponent } from './components/Media/magazine-element/magazine-element.component';
import { HttpClientModule } from '@angular/common/http'; 

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
    SmepTitlesComponent,
    SeviceServicesComponent,
    CommonBannerComponent,
    MediaMainComponent,
    CommonTextSloganComponent,
    MagazineGridComponent,
    MagazineElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
