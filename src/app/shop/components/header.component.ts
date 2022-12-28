import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-header',
  templateUrl: '../templates/header.component.html',
})
export class HeaderComponent {
  url: string = environment.url;
  products: any;

  constructor(private shopService: ShopService,
    private _Router: Router,
  ) {}

  handdleSearch(name: any){
    const keywork = name.target.value;
  const search = this.shopService.searchProductList(keywork).then(res => {
    this.products = res;
  })
  }
}
