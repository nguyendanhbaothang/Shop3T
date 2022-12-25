import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-home',
  templateUrl: '../templates/home.component.html',
})
export class HomeComponent {
  constructor(
    private shopService : ShopService,


    ) { }
  url: string = environment.url;
  trending_top:any[] =[];



}
