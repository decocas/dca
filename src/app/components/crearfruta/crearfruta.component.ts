import { Component, OnInit } from '@angular/core';
import { FrutaaService } from 'src/app/services/frutaa.service';
import {  FormBuilder, Validators } from '@angular/forms'; 
import { FormGroup}from '@angular/forms';
import { Fruta } from 'src/app/models/fruta';
 
 
@Component({
  selector: 'app-crearfruta',
  templateUrl: './crearfruta.component.html',
  styleUrls: ['./crearfruta.component.css']
})
export class CrearfrutaComponent implements OnInit {
  formGroup: FormGroup;
  listaFruta:Fruta[];
  constructor(public f:FrutaaService,// para injection de dependencia
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup=this.formBuilder.group({
          nombre:['',Validators.required],
          id:['',Validators.required],
          valor:[0,Validators.required] //validar negativo
  });
  
  this.getListaFruta(); 
}

  getListaFruta(){
    this.f.getfrutas()
    .subscribe(listaFruta=> this.listaFruta=listaFruta);
  }

  agregar( ){
      //si el formulario esta vacio no agrega elementos al array
      if(this.formGroup.valid ){  
       console.log(this.formGroup.value);
       this.f.add(this.formGroup.value);
       
       this.formGroup.reset();
 } }

 

}
