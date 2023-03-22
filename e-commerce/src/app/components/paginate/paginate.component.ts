import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel.';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {

  product:ProductModel[]=[];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {

    this.productsService.getPaginate().subscribe(data=>this.product=data)
  }

}
