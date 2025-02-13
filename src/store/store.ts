import { configureStore  } from '@reduxjs/toolkit';
import { cartSlice } from './productSlice';
import { useDispatch } from 'react-redux';


export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()