import { ProductsService } from './../../services/products.service';
import { ProductModel } from './../../models/ProductModel.';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css']
})
export class SliceComponent implements OnInit {

  product:ProductModel[]=[];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {

    this.productsService.getSlice().subscribe(data=>this.product=data)
  }

}
