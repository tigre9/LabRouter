import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step2Component } from './components/step2.component';
import { Step1Component } from './components/step1.component';
import { Step3Component } from './components/step3.component';



@NgModule({
  declarations: [
    Step2Component,
    Step1Component,
    Step3Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Step2Component,
    Step1Component,
    Step3Component
  ]
})
export class SharedModule { }
