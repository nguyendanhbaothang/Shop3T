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
  limit: number = 1;
    total: number = 0;

  ngOnInit (){
    this.shopService.product_list(1).subscribe((res: { data: any;total:any}) => {
      console.log(res);

      let products = res.data;
      this.products = products;
    })
  }

  product_list() {
    this.shopService.product_list(this?.limit).subscribe((res: { data: any; total:any}) => {
      this.total=res.total;
      this.products = res.data;
      console.log(this.products);
    })
  }
  addToCart(id: number) {
    this.shopService.addToCart(id).subscribe(res => {
     alert('Thành công Thêm vào giỏ hàng!');
    })
  }
}
