import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponentComponent} from './home-component/home-component.component';
import {ChoicesComponent} from './choices/choices.component';


const routes: Routes = [
  { path: 'home', component: HomeComponentComponent},
  { path: 'choicesSelection', component: ChoicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
