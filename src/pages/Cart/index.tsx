import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { store } from '../../store/store';
import { cartSlice } from '../../store/productSlice';

const Cart = () => {


    const products = useSelector((state: any) => state.cart)
    return (
        <>
        </>
    );
}

export default Cart;
