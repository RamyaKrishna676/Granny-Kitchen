import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/class/order';
import { ORDERS } from './orderList';
import { FoodQuantity } from '../class/foodQuantity';
import { Cart } from '../class/cart';
import { RestaurantService } from '../restaurant/restaurant.service';

@Injectable({
    providedIn: 'root'
  })
  export class OrderService {
      pastOrder:Order[];
      liveOrder:Order[];
      ordersObservable: Subject<Order[]>=new Subject<Order[]>();
      liveObservable: Subject<Order[]> = new Subject<Order[]>();
    constructor(private restaurantService:RestaurantService) {
        this.pastOrder=ORDERS.slice();
        this.liveOrder = [];
     }
     getOrders() {
        this.ordersObservable.next(this.pastOrder);
      }
      checkOutFun(value:FoodQuantity[]){
        if(FoodQuantity.length>0){
          let order = new Order();
          order.id = 1001;

          var dateObj = new Date();
          let month = dateObj.getUTCMonth() + 1; //months from 1-12
          let day = dateObj.getUTCDate();
          let year = dateObj.getUTCFullYear();

          order.date = (day + "/" + month + "/" + year).toString();
          order.cart = this.getCartInstance(value);
          
          this.liveOrder.push(order);
          this.liveObservable.next(this.liveOrder);
      }
      }
      getCartInstance(foodQuantity:FoodQuantity[]):Cart{
        let cart = new Cart();
        cart.id = 103;
        cart.foodQuantityList = foodQuantity;
        cart.grandTotal = 0;  
        this.restaurantService.getRestaurant(foodQuantity[0].food.restaurantId).subscribe(data=>
          cart.restaurant = data
        );
        foodQuantity.forEach(data => (cart.grandTotal += data.totalPrice));
        console.log(cart.grandTotal);

        return cart;
      }
  }