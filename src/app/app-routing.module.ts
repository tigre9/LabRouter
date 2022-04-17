import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AnagraficaComponent} from "./features/anagrafica/anagrafica.component";

const routes: Routes = [

  //T caso 1 modulo normale
  { path: '' , pathMatch:'full', redirectTo:'/anagrafica'},
  { path: '**' , pathMatch:'full', redirectTo:'/anagrafica'},


  //T caso 2 modulo caricato in lazy loading
  // { path: 'dichiarazione',  loadChildren: () => import('./features/dichiarazione/dichiarazione.module').then(m => m.DichiarazioneModule), data: {preload: true} },
  // { path: '' , pathMatch:'full', redirectTo:'dichiarazione'},
  // { path: '**', redirectTo: 'dichiarazione', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
