import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel.';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  product:ProductModel[]=[];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {

    this.productsService.getSort().subscribe(data=>this.product=data)
  }

}
