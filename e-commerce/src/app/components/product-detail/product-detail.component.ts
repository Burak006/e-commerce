import { ProductDetailModel } from './../../models/product-detail-model';
import { ProductsService } from './../../services/products.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetailModel : ProductDetailModel ;
  

  constructor(private activatedRoute:ActivatedRoute,private productsService:ProductsService) { }

  ngOnInit(): void {
     this.activatedRoute.params.subscribe(params=>{this.getProductDetailBy(params['id'])})
  }

  getProductDetailBy(id:number){
    this.productsService.getProductDetailBy(id).subscribe((data)=>{
      this.productDetailModel=data;
    })
  }

  
  }




