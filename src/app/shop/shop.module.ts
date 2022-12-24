import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { ProductListComponent } from './components/product-list.component';
import { ShopRoutingModule } from './shop-routing.module';
import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ProductListComponent,
    ShopComponent,


  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class ShopModule { }
