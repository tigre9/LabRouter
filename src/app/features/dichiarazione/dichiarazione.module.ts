import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DichiarazioneRoutingModule } from './dichiarazione-routing.module';
import { DichiarazioneComponent } from './dichiarazione.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    DichiarazioneComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DichiarazioneRoutingModule
  ]
})
export class DichiarazioneModule { }
