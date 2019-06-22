import { FoodQuantity } from './foodQuantity';
import { Restaurant } from './restaurant';
export class Cart {
    id: number;
    foodQuantityList: FoodQuantity[];
    grandTotal: number;
    restaurant:Restaurant;

}