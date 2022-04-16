import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnagraficaComponent} from "./features/anagrafica/anagrafica.component";

const routes: Routes = [

  { path: '' , pathMatch:'full', redirectTo:'anagrafica'},
  { path: 'anagrafica' , component: AnagraficaComponent},


  // { path: '' , pathMatch:'full', redirectTo:'dichiarazione'},
  // {path: 'dichiarazione', loadChildren: () => import('./features/dichiarazione/dichiarazione.module').then(m => m.DichiarazioneModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
