import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-listorder',
  templateUrl: '../templates/listorder.component.html',
})
export class ListorderComponent {
  [x: string]: any;
  customer_id: any;
  order: any;
  totalPrice: number = 0;
  getAllCart:any;
  url: string = environment.url;
  url_image = this.url + 'public/assets/product/';
  message : {} = {};
  constructor(
    private ShopService: ShopService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ShopService.getListOrder(this.customer_id).subscribe(res => {
      this.order = res;
      console.log(this.order);

    })
  }
  deleteCart(id:number){
    this.ShopService.RemoveToCart(id).subscribe(res => {
     this.message = res;
     window.location.reload();
    })
  }
  updateQuantity(id: any, quantity: any){
    this.ShopService.updateQuantity(id, quantity).subscribe(res => {
        this.getAllCart();
    });
}
updateCart(){
  window.location.reload();
}
}
