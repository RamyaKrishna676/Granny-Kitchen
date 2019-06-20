import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { Ng2OrderModule} from 'ng2-order-pipe';
import { RestaurantModule } from './restaurant/restaurant.module';
import { CommonModule } from '@angular/common';
import { CartComponent } from './order/cart/cart.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CustomerComponent,
    CartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    Ng2OrderModule,
    RestaurantModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
