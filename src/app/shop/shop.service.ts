import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "./shop";


@Injectable({
  providedIn: 'root'
})
export class ShopService {
tranding_top() {
  throw new Error('Method not implemented.');
}



constructor(private http: HttpClient) {}

product_list(page:any): any {
  return this.http.get(environment.urlAllProducts +'/'+ "?page="+page);
}
product_detail(id:any): any{
  return this.http.get(environment.urlIdProduct+'/'+id)
}
getListOrder(id: any){
  return this.http.get(environment.urlListOrde);
}
addToCart(id: number){
  return this.http.get(environment.urlAddToCart+id);
}
getAllCart(id:any){
  return this.http.get(environment.urlGetAllCart);
}
RemoveToCart(id:any){
  return this.http.get(environment.urlRemoveToCart+id);
}
updateQuantity(id: any, quantity: any){
  return this.http.get(environment.urlUpdateQuantity+id+'/'+quantity);
}
product_hot(): any {
  return this.http.get(environment.url +'api/trendingProduct');
}
product_new(): any {
  return this.http.get(environment.url +'api/product_new');
}

}
