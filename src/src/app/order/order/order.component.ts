import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/class/order';
import { Subscription } from 'rxjs';
import { OrderService } from '../order.service';
import { MatDialog } from '@angular/material';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { ViewOrderComponent } from '../view-order/view-order.component';
import { FoodService } from 'src/app/foods/food.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  pastOrderList:Order[]=[];
  orderSubcription:Subscription;
  liveOrderList:Order[]=[];
  constructor(private orderService:OrderService,public dialog: MatDialog, private foodService: FoodService) { }

  ngOnInit() {
    this.orderSubcription = this.orderService.ordersObservable.subscribe(
      (data:Order[]) => (this.pastOrderList=data)
    );
    this.orderSubcription = this.orderService.liveObservable.subscribe(data => {this.liveOrderList = data;console.log("data is",this.liveOrderList)});
    this.orderService.getOrders();
  }
  openDialog() {
    const dialogRef = this.dialog.open(OrderDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openviewDialog(){
    const dialogRef = this.dialog.open(ViewOrderComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
