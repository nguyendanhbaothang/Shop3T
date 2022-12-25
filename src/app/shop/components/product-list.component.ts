import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-list',
  templateUrl: '../templates/product-list.component.html',
})
export class ProductListComponent implements OnInit {
  toastr: any;
  orderService: any;

  constructor(private shopService: ShopService) { }
  products: any[] = [];
  url: string = environment.url;
  ngOnInit(): void {
    this.product_list();
    console.log(this.product_list());
  }

  product_list(){
    this.shopService.product_list().subscribe((res: { data: any; }) =>{
      let products = res.data;
      this.products = products;

    })
  }

  addToCart(id: number) {
    this.shopService.addToCart(id).subscribe(res => {
      this.toastr.alert('Thành công', 'Thêm vào giỏ hàng!');
      console.log(this.shopService);

    })
  }
}
