import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        addProducts: (_, action) => {
            return action.payload
        }
    }
})

export const {addProducts} = productSlice.actions