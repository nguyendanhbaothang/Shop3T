import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: '../templates/home.component.html',
})
export class HomeComponent {
  products: any[] = [];
  url: string = environment.url;
  trending_top: any[] = [];
  constructor(
    private shopService: ShopService,
  ) { }
  limit: number = 1;
  total: number = 0;


  ngOnInit() {
    this.shopService.product_hot().subscribe((res:any) => {
      // console.log(res);

      let products = res;
      this.products = products;
    })
  }

  // product_list() {
  //   this.shopService.product_list(this?.limit).subscribe((res: { data: any; total: any }) => {
  //     this.total = res.total;
  //     this.products = res.data;
  //     console.log(this.products);
  //   })
  // }
  addToCart(id: number) {
    this.shopService.addToCart(id).subscribe(res => {
      const Toast = Swal.mixin({
        toast: true,
        width: 400,
        position: 'top-end',
        color: 'rgb(255, 255, 255)',
        padding: '2em',
        showConfirmButton: false,
        background: 'rgb(108, 108, 108)',
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Thêm vào giỏ hàng thành công!'
      })
    })
  }
}
