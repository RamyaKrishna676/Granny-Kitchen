import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SORT } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from 'src/app/class/restaurant';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent implements OnInit {

  @Input() restaurantArray: Restaurant[];
  

  sortBy = new FormControl;
  asc= true;
  sortList = SORT;

  constructor(private service: RestaurantService) { }

  ngOnInit() {
  }

  sort(){
    this.asc = !this.asc;
    //console.log("Entered into sort")
    this.service.sortBy(this.sortBy.value,this.asc);
  }
}
