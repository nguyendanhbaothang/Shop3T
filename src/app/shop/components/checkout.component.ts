import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';
import { ToastrService } from 'ngx-toastr';
import { Order } from '../shop';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: '../templates/checkout.component.html',
})
export class CheckoutComponent {
  form!: FormGroup;
  name: any;
  id: any;
  email: any;
  listCart: any;
  cartSubtotal: number = 0;
  url: any = environment.url;
  listProvince: any;
  listDistrict: any;
  listWard: any;
  provinceSelected: boolean = false;
  districtSelected: boolean = false;
  login: any

  constructor(
    private ShopService: ShopService,
    private _Router: Router,
    private _UserService: AuthService,
  ) {}

  ngOnInit(): void {
    this.login =  this._UserService.checkAuth()
    console.log(this.login);
    this.getAllCart();

    this.form = new FormGroup({
      name_customer: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    this.getAllCart()
  }
  getAllCart() {
    this.ShopService.getAllCart().subscribe(res => {
      this.listCart = res;
      this.cartSubtotal = 0;
      for (let cart of this.listCart) {
        this.cartSubtotal += cart.price * cart.quantity;
      }
    });
  }
  submit() {
    let order: any;
    let id = this.id;
    let data = this.form.value;
    let Order: Order = {
      name_customer: data.name_customer,
      address: data.address,
      phone: data.phone,
      email: data.email,
    }
    console.log(Order);
    this.ShopService.storeOrder(Order).subscribe(res => {
      order = res;
      Swal.fire({
        icon: 'success',
        title: 'Đặt hàng thành công!',
        text: 'Bây giờ tiếp tục mua hàng nhé!',
        confirmButtonText: 'Tuyệt',
      }).then((result) => {
        if (result.isConfirmed) {
          this._Router.navigate(['order-detail']);
        }
      })
    });
  }
}
