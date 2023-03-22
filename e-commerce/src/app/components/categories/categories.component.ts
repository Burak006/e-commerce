import { SomeServiceService } from './../../services/some-service.service';
import { CategoriesService } from './../../services/categories.service';
import { ProductsService } from './../../services/products.service';
import { CategoriesModel } from './../../models/CategoriesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:CategoriesModel[]=[];
  filterTextCategory:string='';
  counterofCategory:number=0;


  constructor(private categoriesService:CategoriesService,
    private productService:ProductsService,private someService:SomeServiceService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(data=>this.categories=data)
    this.counterofCategory=this.someService.counter;

  }

  increase(){
    this.counterofCategory=this.someService.increase();
  }

  

  

}
