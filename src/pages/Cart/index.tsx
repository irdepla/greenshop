import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { CartItem } from "../../interfaces/CartInterface";
import { useEffect, useState } from "react";
import CartProduct from "../../components/CartProduct";
import MainButton from "../../components/MainButton";
import { NavLink } from "react-router";
import ModalButton from "../../components/ModalButton";

const Cart = () => {
  const [productsTotal, setProductsTotal] = useState<number>(0);
  const cart = useSelector((state: RootState) => state.cart);
  const shippingCost = 16;

  console.log("Cart contents:", cart);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    let totalSum = 0;
    cart.forEach((item: CartItem) => {
      totalSum += item.product.price * item.quantity;
    });
    setProductsTotal(parseFloat(totalSum.toFixed(2)));
  }, [cart]);

  return (
    <>
      <div className="container cart__wrapper flex justify-between gap-[86px] mt-[51px]">
        <div className="cart__list flex flex-col">
          <div className="flex pb-[11px] border-b border-[#46A35880]">
            <span className="text-text__color font-medium">Products</span>
            <span className="ml-[245px] text-text__color font-medium">
              Price
            </span>
            <span className="ml-[140px] text-text__color font-medium">
              Quantity
            </span>
            <span className="ml-[97px] text-text__color font-medium">
              Total
            </span>
          </div>
          <div className="grid grid-cols-1 justify-between items-center gap-[10px] ">
            {cart.length > 0 ? (
              cart.map((item: CartItem) => (
                <CartProduct key={item.product._id} cartProduct={item} />
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>

        <div className="cart__total">
          <h2 className="pb-[11px] font-bold text-lg text-text__color border-b border-[#46A35880] ">
            Cart Totals
          </h2>
          <p className="font-medium mt-[11px] text-sm text-text__color">
            Coupon Apply
          </p>
          <div className="mt-2 flex">
            <input
              className="border border-main focus:outline-none py-3 pl-[3px] pr-[52px] rounded-[3px]"
              type="text"
              placeholder="Enter coupon code here..."
            />
            <MainButton
              className="pl-[35px] pr-[25px] py-3 rounded-[3px]"
              text="Apply"
            />
          </div>
          <div className="flex flex-col gap-[15px] mt-[30px]">
            <p className="flex justify-between items-center">
              <span className="text-text__color text-[15px] font-normal">
                Subtotal
              </span>
              <span className="font-medium text-lg text-text__color">
                ${productsTotal}.00
              </span>
            </p>
            <p className="flex justify-between items-center">
              <span className="text-text__color text-[15px] font-normal">
                Coupon Discount
              </span>
              <span className="font-medium text-[15px] text-text__color">
                (-) 00.00
              </span>
            </p>
            <p className="flex justify-between ">
              <span className="text-text__color text-[15px] font-normal">
                Shiping
              </span>
              <span className="font-medium flex flex-col text-lg text-text__color">
                <span className="text-right">$16.00</span>
                <NavLink className="text-xs font-normal mt-2 text-main" to="">
                  View shipping charge
                </NavLink>
              </span>
            </p>
          </div>
          <p className="flex justify-between mt-[26px]">
            <span className="font-bold text-base text-text__color">Total</span>
            <span className="font-bold text-lg text-main">
              ${productsTotal + shippingCost}.00
            </span>
          </p>
          <ModalButton className="mt-[30px] px-[91px] py-3 mx-auto rounded-none" buttonText="Proceed To Checkout" />
          <NavLink className=" block mt-[14px] text-center mx-auto text-main text-[15px] font-normal" to="/home" >
          Continue Shopping
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Cart;
