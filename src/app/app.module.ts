import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import {DoodleApiService} from './doodle-api.service';
import {HttpClientModule} from '@angular/common/http';
import { BrandBarComponentComponent } from './brand-bar-component/brand-bar-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DateFormGeneratorComponentComponent } from './date-form-generator-component/date-form-generator-component.component';
import { DateSiteFormGeneratorComponentComponent } from './date-site-form-generator-component/date-site-form-generator-component.component';
import { SiteFormGeneratorComponentComponent } from './site-form-generator-component/site-form-generator-component.component';
import { IdentityFormGeneratorComponent } from './identity-form-generator/identity-form-generator.component';
import { AnswerPageComponentComponent } from './answer-page-component/answer-page-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    BrandBarComponentComponent,
    DateFormGeneratorComponentComponent,
    DateSiteFormGeneratorComponentComponent,
    SiteFormGeneratorComponentComponent,
    IdentityFormGeneratorComponent,
    AnswerPageComponentComponent
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
