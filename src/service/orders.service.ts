import { apiClient } from "../config/api.config";


export interface OrderData {
  items: { productId: string; quantity: number }[];
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  apartment: string;
  state: string;
  zip: string;
  email: string;
  phoneNumber: string;
  notes?: string;
}

export const addOrder = async (orderData: OrderData) => {
  const response = await apiClient.post("orders", orderData);
  return response.data;
};
