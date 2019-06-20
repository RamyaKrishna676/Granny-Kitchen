import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from 'src/app/class/restaurant';
import { Observable } from 'rxjs';
import { async } from 'q';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant$: Observable<Restaurant>;
  selectedId: number;
  
  constructor(private route: ActivatedRoute,private router: Router,private service: RestaurantService) { }

  ngOnInit() {

    this.restaurant$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getRestaurant(params.get('id'))),
      
    );
    // let i = 0;
    // this.restaurant$.forEach(data=>console.log(data.name+i++));
  }

}
