import { Injectable } from '@angular/core';
import { RESTAURANTS } from './restaurant';
import { Observable,of } from 'rxjs';
import { Restaurant } from '../class/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

 
  constructor() { }

  getRestaurants():Observable<Restaurant[]> {
    return of(RESTAURANTS);
  }
}
