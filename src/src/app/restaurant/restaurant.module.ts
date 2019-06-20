import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantService } from './restaurant.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReviewsListComponent } from '../reviews/reviews-list/reviews-list.component';
import { SortByComponent } from './sort-by/sort-by.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FoodListComponent } from '../foods/food-list/food-list.component';
import { FoodService } from '../foods/food.service';
import { OrderComponent } from '../order/order/order.component';
import { ViewOrderComponent } from '../order/view-order/view-order.component';
import { OrderDetailsComponent } from '../order/order-details/order-details.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  declarations: [RestaurantListComponent, RestaurantDetailComponent, ReviewsListComponent, SortByComponent,HeaderComponent,FoodListComponent,OrderComponent,ViewOrderComponent,OrderDetailsComponent],
  providers: [RestaurantService,FoodService],
  exports:[RestaurantDetailComponent,RestaurantListComponent,ReviewsListComponent,SortByComponent,HeaderComponent,FoodListComponent,OrderComponent,ViewOrderComponent,OrderDetailsComponent],
    entryComponents:[ViewOrderComponent,OrderDetailsComponent]
})
export class RestaurantModule { }
