import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-list',
  templateUrl: '../templates/product-list.component.html',
})
export class ProductListComponent {

  constructor(private shopService: ShopService) { }
  products: any[] = [];
  url: string = environment.url;
  ngOnInit(): void {
    this.product_list();
    console.log(this.product_list());
  }

  product_list(){
    this.shopService.product_list().subscribe(res =>{
      this.products = res;
    })
  }
}
