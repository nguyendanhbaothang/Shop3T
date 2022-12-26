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
  name_customer: any;
  customer_id: any;
  image:{ url: string};
  phone: any;
}

