import { CartService } from './../../services/cart.service';
import { SomeServiceService } from './../../services/some-service.service';
import { Component, OnInit } from '@angular/core';
import ICartItem from 'src/app/data/cart-item';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
  // providers:[SomeServiceService]  //navi counter bana özel olsun diyor.buraya özel component lazım
})
export class NaviComponent implements OnInit {

  currentItem:ICartItem;
  money:number;

  

  constructor(
    public someService:SomeServiceService,
    public cartService:CartService) { } //public yapınca html de erişebiliyor.navinin htmli


  cartItems:ICartItem[]=[]
  
  ngOnInit(): void {
    this.cartItems=this.cartService.getCart();
  }

  selectedItem(item){
    this.currentItem=item;
    this.cartService.setSelectedItem(item);
  }
  

  //dependencyenjection 

}
