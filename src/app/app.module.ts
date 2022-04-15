import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AnagraficaModule} from "./features/anagrafica/anagrafica.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnagraficaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
