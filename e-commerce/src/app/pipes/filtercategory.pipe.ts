import { CategoriesModel } from './../models/CategoriesModel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercategory'
})
export class FiltercategoryPipe implements PipeTransform {

  transform(value:CategoriesModel[],filterTextCategory:string):CategoriesModel[]{
    filterTextCategory=filterTextCategory?filterTextCategory.toLocaleLowerCase() : null
    return filterTextCategory?value.filter((c:CategoriesModel)=>c.name.toLocaleLowerCase().indexOf(filterTextCategory)!==-1):value
  }


  

}
