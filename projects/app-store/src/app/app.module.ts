import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductAlertsComponent } from '../components/product-alerts/product-alerts.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { CartComponent } from '../components/cart/cart.component';
import { ShippingComponent } from '../components/shipping/shipping.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'products/:productId', component: ProductDetailComponent },
      { path: '', component: ProductListComponent },
      { path: 'cart', component: CartComponent},
      { path: 'shipping', component: ShippingComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
