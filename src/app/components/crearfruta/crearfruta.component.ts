import { Component, OnInit } from '@angular/core';
import { FrutaaService } from 'src/app/services/frutaa.service';
import {  FormBuilder, Validators } from '@angular/forms'; 
import { FormGroup}from '@angular/forms';
  import { from } from 'rxjs';
import { Fruta } from 'src/app/models/fruta';
import { newArray } from '@angular/compiler/src/util';
@Component({
  selector: 'app-crearfruta',
  templateUrl: './crearfruta.component.html',
  styleUrls: ['./crearfruta.component.css']
})
export class CrearfrutaComponent implements OnInit {
  formGroup: FormGroup;
  constructor(public f:FrutaaService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup=this.formBuilder.group({
          nombre:['',Validators.required],
          id:['',Validators.required],
          valor:[0,Validators.required] //validar negativo
  })
  this.f.fruta=new Fruta();
  this.f.listaFrutas=new Array();
  }

  agregar( ){

      
      if(this.formGroup.valid ){  
       console.log(this.formGroup.value);
       this.f.add(this.formGroup.value);
       //this.f.fruta=new Fruta();
       this.formGroup.reset();
 } }



}
