import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-hot',
  templateUrl: '../templates/product-hot.component.html',
})
export class ProductHotComponent {
  constructor(
    private shopService: ShopService,
    // private toastr: ToastrService

  ) { }
  limit: number = 1;
  total: number = 0;
  url: string = environment.url;
  products: any[] = [];
  quantity1000000_10000000: any;
  quantity10000000_15000000: any;
  quantity15000000_20000000: any;
  quantity20000000_25000000: any;
  lenghtFilter1_10: any = 0;
  category_id: any;
  categories: any;
  itemsPerPage: number = 0;
  ngOnInit(): void {
    this.trending();
    this.filterCate(this.category_id);

  }
  product_list() {
    this.shopService.product_list(this?.limit).subscribe((res: { data: any; total: any }) => {
      this.total = res.total;
      this.products = res.data;
      console.log(this.products);
    })
  }
  pageChangeEvent(page: number) {
    this.limit = page;
    this.shopService.product_list(page).subscribe((res: { data: any; }) => {
      let products = res.data;
      this.products = products;
    })
  }

  trending() {
    this.shopService.product_hot().subscribe((res: any) => {
      let products = res;
      console.log(res);
      this.products = products;
    })
  }
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
  


  fillter1_10() {
    let obj = []
    for (const product of this.products) {
      if (product.price >= 1000000 && product.price <= 10000000) {
        obj.push(product);
      }
    }
    this.products = obj;
  }

  fillter10_15() {
    let obj = []
    for (const product of this.products) {
      if (product.price >= 10000000 && product.price <= 15000000) {
        obj.push(product);
      }
    }
    this.products = obj;
  }

  fillter15_20() {
    let obj = []
    for (const product of this.products) {
      if (product.price >= 15000000 && product.price <= 20000000) {
        obj.push(product);
      }
    }
    this.products = obj;
  }

  fillter20_25() {
    let obj = []
    for (const product of this.products) {
      if (product.price >= 20000000 && product.price <= 25000000) {
        obj.push(product);
      }
    }
    this.products = obj;
  }

  fillter25_100() {
    let obj = []
    for (const product of this.products) {
      if (product.price >= 25000000 && product.price <= 100000000) {
        obj.push(product);
      }
    }
    this.products = obj;
  }
  filterCate(category_id: any) {
    this.category_id = category_id;
    this.shopService.category_listSer().subscribe((res: any) => {
      this.categories = res;
      for (const category of this.categories) {
        if (this.category_id == category.id) {
          this.products = category.products;
        }
      }
    });
  }
}
