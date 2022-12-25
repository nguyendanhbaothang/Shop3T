import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: '../templates/product-detail.component.html',
})
export class ProductDetailComponent {
  constructor(
    private shopService: ShopService,
    private _route: ActivatedRoute,

    ) { }

  url: string = environment.url;
  id: any;
  product_id: any;
  products: any;
  product: any;
  images:any;
  trending_top :any[]=[];
  image1:any;
  url_image = this.url+'storage/images/product/';
  image_2 :any;
  cate_id:any;
  count: number = 0;
  product_all: any = [];
  images_array: any[] = [];
  images_array_1: any[] = [];
  inter:any;
  inter1:any;


  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.shopService.product_detail(this.id).subscribe((res: any) =>{
      this.products = res;
      for( let product of this.products){
        this.product = product;
        this.image1 = this.url_image+this.product.image;
        this.cate_id=this.product.category_id;
      }

    });
  }
}
