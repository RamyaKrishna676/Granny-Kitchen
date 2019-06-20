import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/restaurant/restaurant.service';
import { Restaurant } from 'src/app/class/restaurant';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    restaurantArray : Restaurant[];
  name:string;
  selectedValue: string;
  userInput : string;
  key: string;
  reverse= false;
  a: string;;
  states = ["Karnataka","Andhra Pradesh","Tamilnadu","Kerala"];
 
  sortArray1 = ['Restaurant','Category','Cuisine','type'];

  constructor(private service: RestaurantService) { }


  ngOnInit() {
    this.service.restaurantObservable.subscribe(data => this.restaurantArray = data);
    this.service.getRestaurants();
  }
  searchBy(data:string){
    this.service.getRestaurants();
    this.restaurantArray = this.restaurantArray.filter( item => item['name'].toLowerCase().includes(data.toLowerCase()) );
    
  }

}
