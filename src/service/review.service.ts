import { apiClient } from "../config/api.config";


export async function createReview(id: string, data: any){
    const res = await apiClient.post(`/reviews${id}`, data)
    return res?.data
}