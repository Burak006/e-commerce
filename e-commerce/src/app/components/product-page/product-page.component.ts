import { ProductDetailModel } from './../../models/product-detail-model';
import { ProductsService } from './../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductPageModel } from 'src/app/models/products-page-model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  productPageModel :ProductDetailModel[];

  constructor(private activatedRoute:ActivatedRoute,private productsService:ProductsService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{this.getProductDetailByPageNumber(params['page'])})
  }

  getProductDetailByPageNumber(page:number){
    this.productsService.getProductDetailByPageNumber(page).subscribe((data)=>{
      this.productPageModel=data;
    })
  }

}
