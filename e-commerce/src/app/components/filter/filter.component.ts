import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel.';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  product:ProductModel[]=[];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {

    this.productsService.getFiltrele().subscribe(data=>this.product=data)
  }

}
