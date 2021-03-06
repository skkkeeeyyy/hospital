import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageHospitalComponent } from './frontpage-hospital/frontpage-hospital.component';
import { SearchdeptHospitalComponent } from './searchdept-hospital/searchdept-hospital.component';
import { ViewdoctersHospitalComponent } from './viewdocters-hospital/viewdocters-hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageHospitalComponent,
    SearchdeptHospitalComponent,
    ViewdoctersHospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
