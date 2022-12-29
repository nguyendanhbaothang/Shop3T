import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { ProductListComponent } from './components/product-list.component';
import { ShopRoutingModule } from './shop-routing.module';
import { RouterModule } from '@angular/router';
// import { ShopComponent } from './shop.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductDetailComponent } from './components/product-detail.component';
import { ListorderComponent } from './components/listorder.component';
import { ProductHotComponent } from './components/product-hot.component';
import { ProductNewComponent } from './components/product-new.component';
// import { HeaderComponent } from './components/header.component';
import { CheckoutComponent } from './components/checkout.component';
import { OrderDetailComponent } from './components/order-detail.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductListComponent,
    // ShopComponent,
    ProductDetailComponent,
    ListorderComponent,
    ProductHotComponent,
    ProductNewComponent,
    // HeaderComponent,
    CheckoutComponent,
    OrderDetailComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatInputModule


  ]
})
export class ShopModule { }
