 export interface ProductData {
  category: string;
  description: string;
  discount: number;
  name: string;
  pictures: string[];
  price: number;
  rank: number;
  size: string;
  _id: number;
  __v: number;
}


export interface ProductResponse {
  products: ProductData[],
  count: number,
}