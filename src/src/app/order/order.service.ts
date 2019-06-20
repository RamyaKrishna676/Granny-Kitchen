import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/class/order';
import { ORDERS } from './orderList';
import { FoodQuantity } from '../class/foodQuantity';
import { Cart } from '../class/cart';

@Injectable({
    providedIn: 'root'
  })
  export class OrderService {
      pastOrder:Order[];
      liveOrder:Order[]
      ordersObservable: Subject<Order[]>=new Subject<Order[]>();
      liveObservable: Subject<Order[]> = new Subject<Order[]>();
    constructor() {
        this.pastOrder=ORDERS.slice();
     }
     getOrders() {
        this.ordersObservable.next(this.pastOrder);
      }
      checkOutFun(value:FoodQuantity[]){
      
        let order = new Order();
        order.id = 1001;
        order.date = new Date().getDate().toString();
        order.cart = this.getCartInstance(value);
        
        this.liveOrder.push(order)
        this.liveObservable.next(this.liveOrder)

        
        // foodQuantity.quantity =1;
        // foodQuantity.totalPrice = food.price
         
      }
      getCartInstance(foodQuantity:FoodQuantity[]):Cart{
        let cart = new Cart();
        cart.id = 103;
        cart.foodQuantityList = foodQuantity;
        cart.grandTotal = 0;  
        foodQuantity.forEach(data => (cart.grandTotal += data.totalPrice));
        console.log(cart.grandTotal);

        return cart;
      }
  }