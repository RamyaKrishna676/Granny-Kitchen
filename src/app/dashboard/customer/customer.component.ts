import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/restaurant/restaurant.service';
import { Restaurant } from 'src/app/class/restaurant';

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
  states = ["Karnataka","Andhra Pradesh","Tamilnadu","Kerala"];
  // sortArray = {
  //   restaurant: ['Udipi','Village Restaurent',"Granny's Kitchen",'Green Land Pure Veg Family Restaurant','Sky Land Family Restaurent','A2B'],
  //   category:['BreakFast','Meals','Fast Food'],
  //   cuisine:['South Indian','North Indian','Chinese'],
  //   type:['Veg','Non-veg']
  // };
  
  //sortArray1=Object.keys(this.sortArray);
  sortArray1 = ['Restaurant','Category','Cuisine','type'];

  constructor(private service: RestaurantService) { }


  ngOnInit() {
    this.service.getRestaurants().subscribe(data => this.restaurantArray = data);
    console.log(this.restaurantArray);
  }
  searchBy(data:string){

    this.restaurantArray = this.restaurantArray.filter( item => item['name'].toLowerCase().includes(data.toLowerCase()) );
    
  }
  
  sortList(data: string) {
    // if(data == this.sortArray1[0]){
    //   this.restaurantArray = this.restaurantArray.sort( (a,b) => {
    //   console.log("a is:",a);
    //   return (a.name.localeCompare(b.name));
    //   });
    // }
    this.key = data;
    this.reverse = !this.reverse;
  }
    // } else if(data == this.sortArray1[1])
    // this.restaurantArray = this.restaurantArray.sort(function(a:Restaurant,b:Restaurant) : Restaurant {
    //   console.log("a is:",a);
    //   return a;
    // }else if(data == this.sortArray1[2])
    // this.restaurantArray = this.restaurantArray.sort(function(a:Restaurant,b:Restaurant) : Restaurant {
    //   console.log("a is:",a);
    //   return a;
    // }else if(data == this.sortArray1[3])
    // this.restaurantArray = this.restaurantArray.sort(function(a:Restaurant,b:Restaurant) : Restaurant {
    //   console.log("a is:",a);
    //   return a;
    // }
  

}
