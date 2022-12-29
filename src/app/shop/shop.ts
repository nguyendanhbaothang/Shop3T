export interface Product {
  name: any;
  price: any;
  quantity: any;
  image:{ url: string};
  description: any;
}

export interface Order{
  note?: any;
  address: any;
  email: any;
  name_customer: any;
  customer_id?: any;
  // image:{ url: string};
  phone: any;
}

export interface User {
  name?:any;
  address?:any;
  phone?:any;
  email:any;
  password:any;
}
