import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../interfaces/ProductsInteface";
import { toast } from "react-toastify";


export interface CartItem {
  product: ProductData,
  quantity: number
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartItem[],
  reducers: {
    addToCart: (state, action:PayloadAction<ProductData>) => {
      const newProduct = action.payload
      console.log("action is", state);
      
      const foundCart = state.find((item) => item.product._id === newProduct._id)

      if (!foundCart) {
        state.push({
          product: newProduct,
          quantity: 1
        })
        toast.success(`${newProduct.name} savatingizga qo'shildi`)     
      } else {
        toast.warning(`${newProduct.name} savatingizga allaqachon qo'shilgan!!!`)
      }


    }
  }
})


export const {addToCart} = cartSlice.actions