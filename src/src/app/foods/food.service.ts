import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';

import { Food } from '../class/food';
import { FOODS } from './foodList';
import { FoodQuantity } from '../class/foodQuantity';
import { Cart } from '../class/cart';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foodObservable:Subject<Food[]> = new Subject<Food[]>();
  cartObservable:Subject<FoodQuantity[]> = new Subject<FoodQuantity[]>();

  temp:Food[];
  cartArray = [];
  totalAmount = [];
  constructor() {
    this.temp= FOODS.slice();
  }

  getFoods(id: string | number){
    this.temp= FOODS.slice();
     this.foodObservable.next(this.temp);
    

    return of(FOODS.filter(food=> food.restaurantId === + id));
  }
  // getRestaurant(id: number | string) {
  //   this.Foods();
  //   return this.restaurantObservable.pipe(
  //     // (+) before `id` turns the string into a number
  //     map((restaurants: Restaurant[]) => restaurants.find(restaurant => restaurant.id === +id))
  //   );
    
  // }
  addToCart(food:Food){
 
    let tempFoodQ = this.cartArray.find(foodQ=>(foodQ.food == food));
    if(tempFoodQ==null)
    this.cartArray.push({food:food,quantity:1,totalPrice:food.price});
    else
    this.cartArray.forEach(foodQ => 
      {tempFoodQ.totalPrice=((tempFoodQ.quantity<10)?++tempFoodQ.quantity:tempFoodQ.quantity)*tempFoodQ.food.price;
        foodQ==tempFoodQ})

      //this.totalAmount.push(food.price);
    this.cartObservable.next(this.cartArray);
  }
  getFoodsAdded(){
    this.cartObservable.next(this.cartArray);
  }
  updateCartObservable(data){
    this.cartArray = data;
    console.log(data)
    this.cartObservable.next(this.cartArray);
    this.cartObservable.forEach(data=>console.log(data));
  }
}
