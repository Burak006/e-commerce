import { ProductsService } from './../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductDetailPageModel } from 'src/app/models/product-detail-page-model';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {

  productDetailPageModel :ProductDetailPageModel[];

  constructor(private activatedRoute:ActivatedRoute,private productsService:ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{this.getProductDetailByPageNumber(params['page'])})
  }


  getProductDetailByPageNumber(page:number){
    this.productsService.getProductDetailByPageNumber(page).subscribe((data)=>{
      this.productDetailPageModel=data;
    })
  }

}
