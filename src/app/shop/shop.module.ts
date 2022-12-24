import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { HomeComponent } from './components/home.component';



@NgModule({
  declarations: [
    ShopComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }
