import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../interfaces/ProductsInteface";
import { toast } from "react-toastify";
import { CartItem } from "../interfaces/CartInterface";


export const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart") as string ) || [],
  reducers: {
    addToCart: (state, action:PayloadAction<ProductData>) => {
      const newProduct = action.payload
      
      const foundCart = state.find((item: CartItem) => item.product._id === newProduct._id)

      if (!foundCart) {
        state.push({
          product: newProduct,
          quantity: 1
        })
        toast.success(`${newProduct.name} savatingizga qo'shildi`)
      } 
      else {
        toast.warning(`${newProduct.name} savatingizga allaqachon qo'shilgan!!!`)
      }

      localStorage.setItem("cart", JSON.stringify(state))

    },

    removeFromCart: (state, action) => {
      const newCartArray = state.filter((item: CartItem) => item.product._id !== action.payload)
      localStorage.setItem("cart", JSON.stringify(newCartArray))
      console.log("item deleted");
      return newCartArray
    },


    increaseQuantity: (state, action) => {
      const id = action.payload
      const foundCart = state.find((item: CartItem) => item.product._id === id)
      foundCart.quantity++
      localStorage.setItem("cart", JSON.stringify(state))
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload
      const foundCart = state.find((item: CartItem) => item.product._id === id)
      if (foundCart.quantity > 1) {
        foundCart.quantity-- 
      } else {
        toast.error("Xato! Boshqa olib tashlay olmaysiz!!!")
      }
      localStorage.setItem("cart", JSON.stringify(state))
    }

  }
})


export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions