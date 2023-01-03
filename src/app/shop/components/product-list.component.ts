import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: '../templates/product-list.component.html',
})
export class ProductListComponent implements OnInit {
  constructor(private shopService: ShopService,

  ) { }

  data: any;
  id: any;
  search: any;
  alert: any;
  serachForm!: FormGroup;
  products: any[] = [];
  cate_id: any;
  limit: number = 1;
  total: number = 0;
  itemsPerPage: number = 0;
  url: string = environment.url;
  orderService: any;
  listCart: any;
  cartSubtotal: number = 0;
  active = 0;
  trending_top: any[] = [];
  quantity1000000_10000000: any;
  quantity10000000_15000000: any;
  quantity15000000_20000000: any;
  quantity20000000_25000000: any;
  lenghtFilter1_10: any = 0;
  category_id: any;
  categories: any;

  ngOnInit(): void {
    this.product_list();
    this.filterCate(this.category_id);

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
  product_list() {
    this.shopService.product_list(this?.limit).subscribe((res: { data: any; total: any }) => {
      this.total = res.total;
      this.products = res.data;

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

  pageChangeEvent(page: number) {
    this.limit = page;
    this.shopService.product_list(page).subscribe((res: { data: any; }) => {
      let products = res.data;
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
  trending() {
    this.shopService.tranding_top().subscribe(res => {
      this.trending_top = res;
    })
  }
}
