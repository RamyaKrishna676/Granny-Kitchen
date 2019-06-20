import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FoodService } from '../food.service';
import { Food } from 'src/app/class/food';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods$: Observable<Food[]>;
  selectedId: number;
  foodCart:Food[];
  constructor(private route: ActivatedRoute,private router: Router, private service: FoodService) { }

  ngOnInit() {
    this.foods$ = this.route.paramMap.pipe(
      switchMap(params =>{
        this.selectedId =+params.get('id'); 
        return this.service.getFoods(this.selectedId);
      })
    )
    console.log(this.foods$);
    this.foods$.forEach(data=>console.log(data))
  }

  addToCart(food1:Food){
    this.service.addToCart(food1)
    // this.service.cartObservable.subscribe(data => this.foodCart = data )
  }
}
