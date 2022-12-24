import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "./../../environments/environment";
import { Product } from "./shop";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
tranding_top() {
  throw new Error('Method not implemented.');
}
constructor(private http: HttpClient) {}

product_list(): Observable<Product[]> {
  return this.http.get<Product[]>(environment.urlAllProducts);
}
}
