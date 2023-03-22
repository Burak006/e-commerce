import { CartService } from './../../services/cart.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel.';
import IProduct from 'src/app/data/product';

@Component({
  selector: 'app-listele',
  templateUrl: './listele.component.html',
  styleUrls: ['./listele.component.css']
})
export class ListeleComponent implements OnInit {

  product:ProductModel[]=[];
  filterText:string='';


  constructor(private productsService:ProductsService,private cartService:CartService) { }

  ngOnInit(): void {

    this.productsService.getGetproducts().subscribe(data=>this.product=data)
  }

  addToCart(product:IProduct){
    this.cartService.addToCart(product);


  }

}
