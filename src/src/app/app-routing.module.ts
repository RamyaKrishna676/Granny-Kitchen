import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail/restaurant-detail.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {
  //   path:"",
  //   component: AppComponent
  // },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path: 'restaurantDetail/:id', 
    component: RestaurantDetailComponent
  },
  {
    path:'customer',
    component:CustomerComponent
  },
  {
    path:"",
    component:LoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
