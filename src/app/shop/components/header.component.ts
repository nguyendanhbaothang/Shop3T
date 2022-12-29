import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: '../templates/header.component.html',
})
export class HeaderComponent {

  url: string = environment.url;
  token: any;
  products: any;
  listCart: any;
  id_user: any;
  name: any;
  constructor(private shopService: ShopService,
    private _Router: Router,
    private _AuthService: AuthService,
    private ShopService: ShopService,
  ) { }
  check: any = this._AuthService.checkAuth();

  ngOnInit(): void {


  }

  handdleSearch(name: any) {
    const keywork = name.target.value;
    const search = this.shopService.searchProductList(keywork).then(res => {
      this.products = res;
      console.log(this.products);
    })
  }
  reloadCurrentPage(id: any) {
    this._Router.navigate(['/product-detail/' + id]);
  }
  logout() {
    this._AuthService.logout();
    this.check = this._AuthService.checkAuth();
    this.listCart = [];
    this._Router.navigate(['login']);
  }
  ngDoCheck(): void {
    if (!this.check) {
      this.check = this._AuthService.checkAuth();
    }
    if (this.check && !this.name && !this.id_user) {
      // this.getAllCart();

    }
  }
}
