import { ProductsService } from './../../services/products.service';
import { ProductModel } from './../../models/ProductModel.';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  product:ProductModel[]=[];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {

    this.productsService.getOperator().subscribe(data=>this.product=data)
  }

}
