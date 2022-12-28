import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-hot',
  templateUrl: '../templates/product-hot.component.html',
})
export class ProductHotComponent {
  constructor( 
    private shopService : ShopService,
    // private toastr: ToastrService

    ) { }
    limit: number = 1;
    total: number = 0;
  url: string = environment.url;
  products:any[] =[];

  ngOnInit(): void {
    this.trending();
  }
  product_list() {
    this.shopService.product_list(this?.limit).subscribe((res: { data: any; total:any}) => {
      this.total=res.total;
      this.products = res.data;
      console.log(this.products);
    })
  }
  trending(){
    this.shopService.product_hot().subscribe((res:any) => {
      let products = res;
      console.log(res);
      this.products = products;
    })
  }
  addToCart(id: number) {
    this.shopService.addToCart(id).subscribe(res => {
     alert('Thành công Thêm vào giỏ hàng!');
    })
  }
  // addToCartByLike(id: number) {
  //   this.shopService.addToCartByLike(id).subscribe(res => {
  //    alert('Thành công Thêm vào giỏ hàng yêu thích!');
  //   })
  // }
 
}
