import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "./shop";


@Injectable({
  providedIn: 'root'
})
export class ShopService {
addToCartByLike(id: number) {
  throw new Error('Method not implemented.');
}



constructor(private http: HttpClient) {}

product_list(): any {
  return this.http.get(environment.urlAllProducts);
}
product_detail(id:any): any{
  return this.http.get(environment.urlIdProduct+'/'+id)
}
getListOrder(id: any){
  return this.http.get(environment.urlListOrde+id);
}
addToCart(id: number){
  return this.http.get(environment.urlAddToCart+id);
}
getAllCart(){
  return this.http.get(environment.urlGetAllCart);
}
}
