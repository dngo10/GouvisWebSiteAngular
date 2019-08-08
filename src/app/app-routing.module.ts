import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/HomePage/main/main.component';
import { ServiceMainComponent } from './components/Services/service-main/service-main.component';
import { MediaMainComponent } from './components/Media/media-main/media-main.component';


const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: MainComponent
  },
  {
    path: 'services',
    component: ServiceMainComponent
  },
  {
    path: 'media',
    component: MediaMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
