import  IProduct  from 'src/app/data/product';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import ICartItem from 'src/app/data/cart-item';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(public cartService:CartService) { }

  cartItems:ICartItem[]=[]

  ngOnInit(): void {
    this.cartItems=this.cartService.getCart();
    
  }
  removeToProduct(product:IProduct){
    this.cartService.removeToProduct(product)
  }


  
  

}
