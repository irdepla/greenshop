import { apiClient } from "../config/api.config";
import { ProductData } from "../interfaces/ProductsInteface";




export async function getProducts()  {
    const {data} = await apiClient.get("/products")
    return data?.products
}

export async function getProductById(id: string) : Promise<ProductData> {
    const res = await apiClient.get(`products/${id}`)
    console.log("response is", res);
    return res.data
}

