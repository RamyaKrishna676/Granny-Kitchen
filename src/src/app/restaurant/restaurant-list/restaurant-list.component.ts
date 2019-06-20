import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from 'src/app/class/restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurantArray : Restaurant[];

  constructor(private service: RestaurantService) { }

  ngOnInit() {
    this.service.restaurantObservable.subscribe(data => this.restaurantArray = data);
    console.log(this.restaurantArray);
  }

}
