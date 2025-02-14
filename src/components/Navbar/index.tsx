import { NavLink } from "react-router";
import NavLogo from "../../assets/icons/greenshop-logo.svg"
import SearchLogo from "../../assets/icons/search-logo.svg"
import CartLogo from "../../assets/icons/cart-logo.svg"
import AuthModal from "../AuthModal";


const Navbar = () => {
    
    return (
        <>
        <nav className="nav ">
            <div className="container nav__wrapper py-[25px] flex items-center justify-between ">
                <div className="nav__logo">
                    <img src={NavLogo} alt="greenshop logo" />
                </div>
                <ul className="nav__list flex items-center gap-[50px]">
                    <li className="nav__list__item">
                        <NavLink to="/">
                        <span className="text-base hover:font-bold text-[#3D3D3D] font-normal ">
                            Home
                        </span>
                        </NavLink>
                    </li>
                    <li className="nav__list__item">
                        <NavLink to="#">
                        <span className="text-base hover:font-bold text-[#3D3D3D] font-normal ">
                            Shop
                        </span>
                        </NavLink>
                    </li>
                    <li className="nav__list__item">
                        <NavLink to="#">
                        <span className="text-base hover:font-bold  text-[#3D3D3D] font-normal ">
                        Plant Care
                        </span>
                        </NavLink>
                    </li>
                    <li className="nav__list__item">
                        <NavLink to="#">
                        <span className="text-base hover:font-bold text-[#3D3D3D] font-normal ">
                        Blogs
                        </span>
                        </NavLink>
                    </li>
                </ul>
                <div className="flex gap-[30px] items-center">
                    <button>
                        <img src={SearchLogo} alt="search logo" />
                    </button>
                    <NavLink to="/cart">
                    <button>
                        <img src={CartLogo} alt="cart logo" />
                    </button>
                    </NavLink>
                    <AuthModal />
                </div>
            </div>
            <hr className="text-[#46A35880] bg-[#46A35880] w-[1100px] block m-auto" />
        </nav>
        </>
    );
}

export default Navbar;
