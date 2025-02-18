import { useState, FormEvent, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { addOrder, OrderData } from "../../service/orders.service";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useSelector } from "react-redux";
import { store } from "../../store/store";
import { ProductData } from "../../interfaces/ProductsInteface";
import { CartItem } from "../../interfaces/CartInterface";
import ModalButton from "../../components/ModalButton";
import CartProduct from "../../components/CartProduct";
import MainButton from "../../components/MainButton";
import { NavLink } from "react-router";

const Cart = () => {

  const [productsTotal, setProductsTotal] = useState<number>(0);
  const shippingCost = 16;

  const cart = useSelector((store: any) => store.cart)

  const [formData, setFormData] = useState<OrderData>({
    items: cart.map((item: CartItem) => ({ productId: item.product._id, quantity: item.quantity })),
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    apartment: "",
    state: "",
    zip: "",
    email: "",
    phoneNumber: "",
    notes: "",
  });

  const mutation = useMutation({
    mutationFn: addOrder,
    onSuccess: (data) => {
      toast.success("Order successfully placed!");
      console.log("Order response:", data);
    },
    onError: (error: AxiosError) => {
      toast.error(error.message || "An error occurred. Please try again!");
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.city || !formData.state || !formData.zip) {
      toast.error("Please fill in all required fields!");
      return;
    }
    mutation.mutate(formData);
  }

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

        <p className="flex justify-between mt-[26px]">
        <span className="font-bold text-base text-text__color">Total</span>
        <span className="font-bold text-lg text-main">
          ${productsTotal + shippingCost}.00
        </span>
      </p>

      </div>
      </div>
      </div>

<form onSubmit={handleSubmit} className="grid grid-cols-2 gap-[22px]">
      {/* First Name */}
      <div className="flex flex-col gap-[10px]">
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>

      {/* Last Name */}
      <div className="flex flex-col gap-[10px]">
        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-[10px]">
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-[10px]">
        <label>Phone Number</label>
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
      </div>

      {/* Country */}
      <div className="flex flex-col gap-[10px]">
        <label>Country</label>
        <input type="text" name="country" value={formData.country} onChange={handleChange} />
      </div>

      {/* City */}
      <div className="flex flex-col gap-[10px]">
        <label>City</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      </div>

      {/* Apartment */}
      <div className="flex flex-col gap-[10px]">
        <label>Apartment</label>
        <input type="text" name="apartment" value={formData.apartment} onChange={handleChange} />
      </div>

      {/* State */}
      <div className="flex flex-col gap-[10px]">
        <label>State</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} required />
      </div>

      {/* Zip Code */}
      <div className="flex flex-col gap-[10px]">
        <label>Zip Code</label>
        <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
      </div>

      {/* Notes */}
      <div className="flex flex-col gap-[10px]">
        <label>Notes</label>
        <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary">Place Order</button>
    </form>

    </>
  );
};

export default Cart;
