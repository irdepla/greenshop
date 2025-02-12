import { ProductData } from "../../interfaces/ProductsInteface";
import SearchLogo from "../../assets/icons/search-logo.svg";
import CartLogo from "../../assets/icons/cart-logo.svg";
import HeartLogo from "../../assets/icons/heart-logo.svg";
import { useState } from "react";
import { NavLink } from "react-router";

interface CardProps {
  product: ProductData;
}

const Card = ({ product }: CardProps) => {
  const [isHovered, setisHovered] = useState(false);

  return (
    <NavLink to={`/product-details/${product._id}`}  >
    <div
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      className="card w-[258px] flex flex-col gap-[6px] justify-center"
    >
      <div className="w-[250px] mx-auto h-[250px]">
        {product.pictures.map((image: string, index: number) => (
          <img key={index} className="w-[250px] h-[250px] object-cover mx-auto" src={image} alt="" />
        ))}
      </div>

      <div
        className={`flex items-center gap-3 justify-center p-2 rounded-lg transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        <img className="w-6 h-6" src={CartLogo} alt="cart logo" />
        <img className="w-6 h-6" src={HeartLogo} alt="heart logo" />
        <img className="w-6 h-6" src={SearchLogo} alt="search logo" />
      </div>

      <p className="font-normal text-base text-text__color">{product.name}</p>
      <span className="text-main font-bold text-lg">${product.price}</span>
    </div>
    </NavLink>
  );
};

export default Card;
