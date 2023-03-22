import { ProductsService } from './../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailModel } from './../../models/product-detail-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-limit',
  templateUrl: './product-limit.component.html',
  styleUrls: ['./product-limit.component.css']
})
export class ProductLimitComponent implements OnInit {

  productLimitModel : ProductDetailModel[] ;

  constructor(private activatedRoute:ActivatedRoute,private productsService:ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{this.getProductLimit(params['page'],params['limit'])})

  }

  getProductLimit(page:number,limit:number){
    this.productsService.getProductLimit(page,limit).subscribe((data)=>{
      this.productLimitModel=data;
    })
  }

}
