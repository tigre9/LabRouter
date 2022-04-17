import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Step1Component} from "../../shared/components/step1.component";
import {Step2Component} from "../../shared/components/step2.component";
import {Step3Component} from "../../shared/components/step3.component";
import {AnagraficaComponent} from "./anagrafica.component";

const routes: Routes = [
  { path: '', redirectTo: 'anagrafica', pathMatch: 'full' },
  { path: 'anagrafica',
    component: AnagraficaComponent,
    children: [
      {path: '', pathMatch:'full', redirectTo: 'step1'},
      {path: 'step1', component: Step1Component},
      {path: 'step2', component: Step2Component},
      {path: 'step3', component: Step3Component},
    ]
  },
  {path: '**', pathMatch:'full', redirectTo: 'anagrafica'},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnagraficaRoutingModule { }
