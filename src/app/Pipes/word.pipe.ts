import { Pipe, PipeTransform } from '@angular/core';
import { FrutaaService } from '../services/frutaa.service';

@Pipe({
  name: 'word'
})
export class WordPipe implements PipeTransform {
constructor(private p:FrutaaService ){

}
  transform(value: string): string {
    
    value;
    return this.p.toggle ? value.toLowerCase() : value.toUpperCase();
  }

}
