import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearfrutaComponent } from './components/crearfruta/crearfruta.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { LoguinComponent } from './components/loguin/loguin.component';
import { LoguinGuard } from './guards/loguin.guard';
import { AppComponent } from './app.component';
 


const routes: Routes = [{path:'crearfruta', component:CrearfrutaComponent, canActivate:[LoguinGuard]/* Candado*/  },
                        {path:'detalle/:id', component:DetalleComponent, canActivate:[LoguinGuard] /* Candado*/},
                        {path:'loguin', component:LoguinComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
