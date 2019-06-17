import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantService } from './restaurant.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantSortPipe } from './restaurant-sort.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RestaurantListComponent, RestaurantDetailComponent, RestaurantSortPipe],
  providers: [RestaurantService],
  exports:[]
})
export class RestaurantModule { }
