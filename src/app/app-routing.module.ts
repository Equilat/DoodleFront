import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponentComponent} from './home-component/home-component.component';
import {SiteFormGeneratorComponentComponent} from './site-form-generator-component/site-form-generator-component.component';
import {DateFormGeneratorComponentComponent} from './date-form-generator-component/date-form-generator-component.component';
import {DateSiteFormGeneratorComponentComponent} from './date-site-form-generator-component/date-site-form-generator-component.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponentComponent},
  { path: 'generateSiteForm', component: SiteFormGeneratorComponentComponent},
  { path: 'generateDateForm', component: DateFormGeneratorComponentComponent},
  { path: 'generateDateSiteForm', component: DateSiteFormGeneratorComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
