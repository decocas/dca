import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearfrutaComponent } from './components/crearfruta/crearfruta.component';
 


const routes: Routes = [{path:'crearfruta', component:CrearfrutaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
