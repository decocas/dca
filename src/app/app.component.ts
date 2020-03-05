import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private r:Router){

  }
  title = 'dca-example';
 
    goCrear():void{
        this.r.navigate(['/crearfruta']);
    }
     
 
}
