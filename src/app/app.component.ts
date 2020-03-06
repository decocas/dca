import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private r:Router,private l:Location){

  }
  title = 'dca-example';
 
    goCrear():void{//redireccionar al formulario
        this.r.navigate(['/crearfruta']);
    }

    back(){ //redireccionar ultima pagina
      this.l.back();
    }
     
 
}
