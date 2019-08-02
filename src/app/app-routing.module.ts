import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/HomePage/main/main.component';
import { ServiceMainComponent } from './components/Services/service-main/service-main.component';


const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: MainComponent
  },
  {
    path: 'service',
    component: ServiceMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
