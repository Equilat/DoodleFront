import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import {DoodleApiService} from './doodle-api.service';
import {HttpClientModule} from '@angular/common/http';
import { BrandBarComponentComponent } from './brand-bar-component/brand-bar-component.component';
import { ChoicesComponent } from './choices/choices.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    BrandBarComponentComponent,
    ChoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [DoodleApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
