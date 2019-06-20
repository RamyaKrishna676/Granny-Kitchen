import { Injectable } from '@angular/core';
import { RESTAURANTS } from './restaurant';
import { Observable,of, Subject } from 'rxjs';
import { Restaurant } from '../class/restaurant';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurantObservable:Subject<Restaurant[]> = new Subject<Restaurant[]>();
  temp1: Restaurant[];

  constructor() { 
    this.temp1 = RESTAURANTS.slice();
  }

  getRestaurants(){
    this.temp1= RESTAURANTS.slice();
     this.restaurantObservable.next(this.temp1);
  }
  getRestaurant(id: number | string) {
    this.getRestaurants();
    return this.restaurantObservable.pipe(
      // (+) before `id` turns the string into a number
      map((restaurants: Restaurant[]) => restaurants.find(restaurant => restaurant.id === +id))
    );
    
  }
 
  sortBy(userInput, isAsc){
    if(userInput!=''){
      //console.log("sortBy method calling");
      //console.log("temp is", this.temp1);
      this.temp1 = this.temp1.slice().sort((a,b) => this.compareTo(a,b,isAsc,userInput));
      this.restaurantObservable.next(this.temp1);

    }
  }
  compareTo(a:Restaurant,b:Restaurant,isAsc,userInput):number{
    return (a[userInput] > b[userInput]? 1: -1)*(isAsc?1:-1);
  }


}
