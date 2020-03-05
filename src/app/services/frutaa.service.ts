import { Injectable } from '@angular/core';
import { Fruta } from '../models/fruta';

@Injectable({
  providedIn: 'root'
})
export class FrutaaService {
  fruta:Fruta;
  listaFrutas:Fruta[];
  constructor() { }

  add(fruta:any){
    this.listaFrutas.push(fruta);
  }

   

  

  

}
