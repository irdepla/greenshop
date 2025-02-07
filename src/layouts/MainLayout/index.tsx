import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";

const MainLayout = () => {
    return (
        <>
        <header>
        <Navbar />
        </header>
        <Outlet />
        </>
    );
}

export default MainLayout;
