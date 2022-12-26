import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-list',
  templateUrl: '../templates/product-list.component.html',
})
export class ProductListComponent implements OnInit {
  constructor(private shopService: ShopService,
  ) { }
  alert: any;

  products: any[] = [];
  cate_id: any;
  p: number = 1;
  total: number = 0;
  itemsPerPage :number =0;
  url: string = environment.url;
  orderService: any;
  listCart: any;
  cartSubtotal: number = 0;
  ngOnInit(): void {
    this.product_list();
    console.log(this.product_list());
  }

  product_list() {
    this.shopService.product_list(1).subscribe((res: { data: any;total:any}) => {
      this.total=res.total;
      let products = res.data;
      this.products = products;
    })
  }
  pageChangeEvent(page: number){
    this.p = page;
    this.shopService.product_list(page).subscribe((res: { data: any; }) => {
      let products = res.data;
      this.products = products;
    })
  }


  addToCart(id: number) {
    this.shopService.addToCart(id).subscribe(res => {
     alert('Thành công Thêm vào giỏ hàng!');
    })
  }


}
