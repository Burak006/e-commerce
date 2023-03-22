
import { ProductModel } from 'src/app/models/ProductModel.';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ProductModel[], filterText: string): ProductModel[] {
    filterText=filterText?filterText.toLocaleLowerCase():null   
    //if filtertext varsa  küçük e çevir. eer yoksa null
    return filterText?value.filter((p:ProductModel)=>p.name.toLocaleLowerCase()  
    //bütün veriyi dolaşıyoır p diye isim verdik her dolaştığı veri productModel
    .indexOf(filterText)!==-1) :value   
    //indexof içince var mı diye bakıyor.o harfin başlangıç indexini verir.yoksa -1 döner
//eger yoksa verimi oldugumu gibi koy
  }

 
}
