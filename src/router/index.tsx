import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

const Router = () => {
    return (
        <>
        <Routes>
            <Route element={<MainLayout />} >
            <Route path="/" element={<Home />} />
            </Route>
        </Routes>
        </>
    );
}

export default Router;
