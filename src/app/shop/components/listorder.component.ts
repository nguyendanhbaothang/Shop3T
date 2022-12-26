import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-listorder',
  templateUrl: '../templates/listorder.component.html',
})
export class ListorderComponent {
  customer_id: any;
  order: any;
  totalPrice: number = 0;
  url: string = environment.url;
  constructor(
    private ShopService: ShopService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ShopService.getListOrder(this.customer_id).subscribe(res => {
      this.order = res;
      console.log(this.order);

      for (let orderDetail of this.order.orders.order_details) {
        this.totalPrice += parseInt(orderDetail.price_at_time) * parseInt(orderDetail.quantity);
      }
    })
  }
}
