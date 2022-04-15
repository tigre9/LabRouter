import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnagraficaRoutingModule } from './anagrafica-routing.module';
import { AnagraficaComponent } from './anagrafica.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    AnagraficaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AnagraficaRoutingModule
  ]
})
export class AnagraficaModule { }
