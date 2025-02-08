import { apiClient } from "../config/api.config";


export async function getProducts()  {
    const res = await apiClient.get("/products")
    return res?.data?.products
}