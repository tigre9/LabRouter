import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnagraficaComponent} from "../anagrafica/anagrafica.component";
import {Step1Component} from "../../shared/components/step1.component";
import {Step2Component} from "../../shared/components/step2.component";
import {Step3Component} from "../../shared/components/step3.component";
import {DichiarazioneComponent} from "./dichiarazione.component";

const routes: Routes = [
  { path: '',
    component: DichiarazioneComponent,
    children: [
      {path: 'step1', component: Step1Component},
      {path: 'step2', component: Step2Component},
      {path: 'step3', component: Step3Component},
      {path: '', pathMatch:'full', redirectTo: 'step1'}, //una url senza valori viene reindirizzata su step1
      {path: '**', pathMatch:'full', redirectTo: 'step1'}, //una url diversa da: step1, step2 o step3 viene reindirizzata su step1
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DichiarazioneRoutingModule { }
