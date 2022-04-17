import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Step1Component} from "../../shared/components/step1.component";
import {Step2Component} from "../../shared/components/step2.component";
import {Step3Component} from "../../shared/components/step3.component";
import {AnagraficaComponent} from "./anagrafica.component";

const routes: Routes = [
  { path: 'anagrafica',
    component: AnagraficaComponent,
    children: [
      {path: 'step1', outlet:'sezione', component: Step1Component},
      {path: 'step2', outlet:'sezione', component: Step2Component},
      {path: 'step3', outlet:'sezione', component: Step3Component},
      {path: '', pathMatch:'full', redirectTo: 'step1'}, //una url senza valori viene reindirizzata su step1
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnagraficaRoutingModule { }
