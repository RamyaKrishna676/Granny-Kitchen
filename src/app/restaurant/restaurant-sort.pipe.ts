import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'restaurantSort'
})
export class RestaurantSortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
