import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { HomeComponent } from './components/home/home.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlansComponent } from './components/plans/plans.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BenefitsComponent,
    HomeComponent,
    TestimoniesComponent,
    FooterComponent,
    PlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
