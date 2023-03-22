import { ProductsService } from './../../services/products.service';
import { ProductModel } from './../../models/ProductModel.';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fulltextsearch',
  templateUrl: './fulltextsearch.component.html',
  styleUrls: ['./fulltextsearch.component.css']
})
export class FulltextsearchComponent implements OnInit {

  product:ProductModel[]=[];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {

    this.productsService.getFullTextSearch().subscribe(data=>this.product=data)
  }

}
