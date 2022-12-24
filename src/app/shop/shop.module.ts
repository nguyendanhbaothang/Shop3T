import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { ProductListComponent } from './components/product-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductListComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }
