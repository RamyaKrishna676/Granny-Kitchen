import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/foods/food.service';
import { Food } from 'src/app/class/food';
import { FoodQuantity } from 'src/app/class/foodQuantity';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  amount:number;
  amount1:number;
  data:FoodQuantity[];
  constructor(private service: FoodService,private orderService: OrderService) { 
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
  
    //this.amount1 = this.getTotal();
    //this.service.getFoodsAdded();
    // if(this.data.length != 0){
    //   for(let a of this.data){
    //     this.amount += a.price;
    //     console.log("amount is",this.amount);
    //   }
    // }
  }
  // getTotal(): any{
  //   this.amount=0;
  //   if(this.data.length != 0 ){
  //     for(let a of this.data){
  //       this.amount += a.price;
  //       console.log("amount is",this.amount);
  //     }
  //   }
  //   return this.amount;
  // }
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
    this.orderService.checkOutFun(this.data)
  }
}
