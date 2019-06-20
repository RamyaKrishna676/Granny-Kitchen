import { Component, OnInit } from '@angular/core';
import { REVIEWS } from '../reviews';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent implements OnInit {

  reviews = REVIEWS;
  constructor() { }

  ngOnInit() {
  }

}
