import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";

const Router = () => {
    return (
        <>
        <Routes>
            <Route element={<MainLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            </Route>
        </Routes>
        </>
    );
}

export default Router;
