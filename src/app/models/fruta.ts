export class Fruta {

    id:string;
    nombre:string;
    valor:number;
constructor() {
this.id='';
this.nombre='';
this.valor=0;
}
public setValor(v:number):void{
    this.valor=v;
    }
    

public setName(n:string):void{
    this.nombre=n;
    }
    

public setId(id:string):void{
this.id=id
}


public getId() : string {
    return this.id;
}

public getName() : string {
    return this.nombre;
}

public getValor() : number {
    return this.valor;
}


}
