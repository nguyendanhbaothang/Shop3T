import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ProductListComponent } from './components/product-list.component';
import { ListorderComponent } from './components/listorder.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductHotComponent } from './components/product-hot.component';
import { ProductNewComponent } from './components/product-new.component';
import { CheckoutComponent } from './components/checkout.component';
import { OrderDetailComponent } from './components/order-detail.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'listorder', component: ListorderComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'product-hot', component: ProductHotComponent },
  { path: 'product-new', component: ProductNewComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-detail/:id', component: OrderDetailComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ShopRoutingModule { }
