import { ProductsService } from './../../services/products.service';
import { ProductModel } from './../../models/ProductModel.';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relationship',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.css']
})
export class RelationshipComponent implements OnInit {
  product:ProductModel[]=[];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {

    this.productsService.getRelationship().subscribe(data=>this.product=data)
  }

}
