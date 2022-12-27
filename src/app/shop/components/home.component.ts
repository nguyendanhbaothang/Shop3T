import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-home',
  templateUrl: '../templates/home.component.html',
})
export class HomeComponent {
  products:any[] = [];
  url: string = environment.url;
  trending_top:any[] =[];
  constructor(
    private shopService : ShopService,
  ) { }

  ngOnInit (){
    this.shopService.product_list(1).subscribe((res: { data: any;total:any}) => {
      console.log(res);
      
      let products = res.data;
      this.products = products;
    })
  }




}
