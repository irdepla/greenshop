
import { apiClient } from "../config/api.config";
import { ProductData, ProductFilters } from "../interfaces/ProductsInteface";




export async function getProducts(filters: ProductFilters)  {
    const {data} = await apiClient.get("/products",
        {
            params: {
                page: 1,
                limit: 9,
                ...filters
            }
        }
    )
    return data?.products
}

export async function getProductById(id: string) : Promise<ProductData> {
    const res = await apiClient.get(`products/${id}`)
    console.log("response is", res);
    return res.data
}

