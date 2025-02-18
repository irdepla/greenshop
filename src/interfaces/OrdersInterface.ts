export interface OrderItem {
    productId: string;
    quantity: number;
  }
  
  export interface OrderData {
    items: OrderItem[];
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    apartment: string;
    state: string;
    zip: string;
    email: string;
    phoneNumber: string;
    notes: string;
  }
  