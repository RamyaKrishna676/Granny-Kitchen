import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/foods/food.service';
import { Food } from 'src/app/class/food';
import { FoodQuantity } from 'src/app/class/foodQuantity';
import { OrderService } from '../order.service';
import { Order } from 'src/app/class/order';
import { RestaurantService } from 'src/app/restaurant/restaurant.service';
import { Restaurant } from 'src/app/class/restaurant';
import { ParamMap,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  amount:number;
  amount1:number;
  data:FoodQuantity[];
  restName:string;
  restaurant$: Observable<Restaurant>;
  constructor(private service: FoodService,private orderService: OrderService,private restaurantService:RestaurantService,private route:ActivatedRoute) { 
     this.amount = 0;
  }

  ngOnInit() {
    this.service.cartObservable.subscribe(x=>{
      this.data=x;
      if(this.data.length != 0){
        this.amount = 0;
        for(let a of this.data){

          this.amount += a.totalPrice;
          console.log("amount is",this.amount);
        }
      }
      console.log("inside cart",this.data)
    });
    //to get restaurant name
    this.restaurant$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.restaurantService.getRestaurant(params.get('id'))),
      
    );
    this.restaurant$.forEach(data=>{ this.restName=data.name;console.log("name is",data.name);});
    //this.restaurantService.restaurantObservable.subscribe(data => console.log(data));
  }
 
  deleteFood(x:FoodQuantity){
    let foodId = x.food.id;
    this.data = this.data.filter(x => x.food.id !== foodId);
    console.log(this.data)
    this.updatePrice()
  }
  removeQuatity(food:Food){
    this.data.forEach(foodQuantity => (foodQuantity.food==food && foodQuantity.quantity>0)?(foodQuantity.totalPrice=--foodQuantity.quantity*foodQuantity.food.price):"");
    this.updatePrice();
  }
  addQuatity(food:Food){
    this.data.forEach(foodQuantity => (foodQuantity.food==food && foodQuantity.quantity<10)?(foodQuantity.totalPrice=++foodQuantity.quantity*foodQuantity.food.price):"")
    this.updatePrice();
  }
  updatePrice(){
    this.amount = 0;
    this.data.forEach(foodQuantity => {
      this.amount += foodQuantity.totalPrice;
    })
    this.service.updateCartObservable(this.data);
  }  
  checkOutFun(){
    if(this.data != null){
      alert("Your order is Successfull !!");
    }else{
      alert("Please add item to cart");
    }
    this.orderService.checkOutFun(this.data);
    
    this.data = null;
    this.amount = 0;
  }
}
