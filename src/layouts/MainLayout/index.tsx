import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const MainLayout = () => {
    return (
        <>
        <header>
        <Navbar />
        </header>
        <Outlet />
        <Footer />
        </>
    );
}

export default MainLayout;
