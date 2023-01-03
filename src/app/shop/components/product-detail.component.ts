import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-detail',
  templateUrl: '../templates/product-detail.component.html',
})
export class ProductDetailComponent {
  alert: any;
  constructor(
    private shopService: ShopService,
    private _route: ActivatedRoute,

  ) { }
  toastr: any;
  url: string = environment.url;
  id: any;
  product_id: any;
  products: any;
  product: any;
  images: any;
  url_image = this.url + 'public/assets/product';
  cate_id: any;
  count: number = 0;
  product_all: any = [];
  inter: any;
  inter1: any;


  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.shopService.product_detail(this.id).subscribe((res: any) => {
      this.products = res;
      // console.log(this.products);
    });
  }

  getCart(id: number) {
    this.shopService.addToCart(this.id).subscribe(res => {
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
