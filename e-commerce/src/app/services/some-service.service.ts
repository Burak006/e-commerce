import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //root injectable benim yerime bu servisten bir tane new oluşturuyor.yayına aldığın anda
})
export class SomeServiceService {  //sayı tutma ve o sayıyı arttırmaya yarıyor

  counter:number=0;

  constructor() { }

  increase(){
    this.counter++;
    return this.counter;
  }

  
}

