import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DichiarazioneRoutingModule } from './dichiarazione-routing.module';
import { DichiarazioneComponent } from './dichiarazione.component';


@NgModule({
  declarations: [
    DichiarazioneComponent
  ],
  imports: [
    CommonModule,
    DichiarazioneRoutingModule
  ]
})
export class DichiarazioneModule { }
