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
  province_id: any;
  district_id: any;
  ward_id: any;
  name_customer: any;
  customer_id: any;
  phone: any;
}

