import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnagraficaComponent} from "./features/anagrafica/anagrafica.component";

const routes: Routes = [
  { path: '' , pathMatch:'full', redirectTo:'anagrafica'},
  // { path: '' , pathMatch:'full', redirectTo:'dichiarazione'},


  { path: 'anagrafica' , component: AnagraficaComponent},
  {
    path: 'dichiarazione',
    loadChildren: () => import('./features/dichiarazione/dichiarazione.module').then(m => m.DichiarazioneModule)
  },

  { path: '**' , redirectTo:'anagrafica'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
