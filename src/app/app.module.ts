import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearfrutaComponent } from './components/crearfruta/crearfruta.component';

import { FrutaaService } from './services/frutaa.service';
import { ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent,
    CrearfrutaComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
 
  ],
  providers: [FrutaaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
