import  IProduct  from 'src/app/data/product';
import { Injectable } from '@angular/core';
import { CART_ITEMS } from '../data/cart-items';
import ICartItem from '../data/cart-item';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  selectedItem:ICartItem;
  unitPrices:number=0;
  totalPrice:number=0;
  constructor() { }

  getCart(){
    return CART_ITEMS;
  }

  setSelectedItem(item){
    this.selectedItem=item;
  }

  addToCart(product:IProduct){
    let cartItem:ICartItem=CART_ITEMS.find(
      (item)=>item.product.id==product.id)  //sepeti geziyor benim yerime for ile

    if(cartItem){
      cartItem.quantity++;
    }
    else{
      CART_ITEMS.push({quantity:1,product:product})

    }
    this.totalCartPrice(product)
    // CART_ITEMS.push({quantity:1,product:product})    //push diziye eklemek için soldaki ismi sagdaki değeri.parametre olarak gelen değer
  }

  totalCartPrice(product:IProduct){
    this.totalPrice+=product.unitPrice;
  }

  removeToProduct(product:IProduct){
    let cartItem:ICartItem=CART_ITEMS.find(
      (item)=>item.product.id==product.id)
      if(cartItem){
        if(cartItem.quantity>1){
          cartItem.quantity--;
        }else{
          CART_ITEMS.splice(CART_ITEMS.indexOf(cartItem),1);
        }
      }
  }
}
