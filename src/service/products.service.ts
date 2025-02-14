
import { apiClient } from "../config/api.config";
import { ProductData } from "../interfaces/ProductsInteface";




export async function getProducts(searchParams: URLSearchParams, page: number)  {

    const {data} = await apiClient.get("/products",
        {
            params: {
               ...Object.fromEntries(searchParams),
               page,
               limit: 9
            }
        }
    )
    console.log(data?.products);
    return data?.products
}

export async function getProductById(id: string) : Promise<ProductData> {
    const res = await apiClient.get(`products/${id}`)
    console.log("response is", res);
    return res.data
}

