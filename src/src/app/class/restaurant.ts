import { User } from './user';
import { Notification } from './notification';
import { FoodReview } from './foodReview';
import { Order } from './order';
import { Address } from './address';

export class Restaurant{
    id: number;
    name: string;
    manager: User;
    fassaiId: string;
    gstNumber: string;
    cuisine:string[];
    address:Address;
    timings: string;
    reviewList: FoodReview[];
    orderList: Order[];
    notification: Notification; 
    imageUrl:string;
    averageRating: number;
    averagePrice: number;
    type:string[];
}