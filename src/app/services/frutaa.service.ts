import { Injectable } from '@angular/core';
import { Fruta } from '../models/fruta';

@Injectable({
  providedIn: 'root'
})
export class FrutaaService {
  
  listaFrutas:Fruta[];
  toggle = true;// bandera para el pipe
  constructor() { }

  add(fruta:any){// agreagr al arreglo
    this.listaFrutas.push(fruta);
  }

   

  

  

}
