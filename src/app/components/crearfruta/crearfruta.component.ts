import { Component, OnInit } from '@angular/core';
import { FrutaaService } from 'src/app/services/frutaa.service';
import {  FormBuilder, Validators } from '@angular/forms'; 
import { FormGroup}from '@angular/forms';
 
 
@Component({
  selector: 'app-crearfruta',
  templateUrl: './crearfruta.component.html',
  styleUrls: ['./crearfruta.component.css']
})
export class CrearfrutaComponent implements OnInit {
  formGroup: FormGroup;
  constructor(public f:FrutaaService,// para injection de dependencia
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup=this.formBuilder.group({
          nombre:['',Validators.required],
          id:['',Validators.required],
          valor:[0,Validators.required] //validar negativo
  })
  
  this.f.listaFrutas=new Array();
  }

  agregar( ){
      //si el formulario esta vacio no agrega elementos al array
      if(this.formGroup.valid ){  
       console.log(this.formGroup.value);
       this.f.add(this.formGroup.value);
       
       this.formGroup.reset();
 } }

 get format()   { return this.f.toggle ? 'USD' : 'EUR'; } // control para la moneda
 toggleFormat() { this.f.toggle = !this.f.toggle;  }//manejo del boton del pipe


}
