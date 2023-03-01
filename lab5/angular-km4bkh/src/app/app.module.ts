import { NgModule,  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { CategoriesComponent } from './categories/categories.component';
import {RatingModule} from 'ng-starrating';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
  RatingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      {path : 'product/:productId', component: ProductDetailsComponent},
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      {path : 'category/:category', component : ProductListComponent}
    ])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    CategoriesComponent
  ],
  bootstrap: [
    AppComponent
  ],

})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/