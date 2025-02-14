import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../store/cartSlice';
import { CartItem } from '../../interfaces/CartInterface';
import MainButton from '../MainButton'
import DeleteButton from "../../assets/icons/delete-icon.svg"

const CartProduct = ({cartProduct} : {cartProduct: CartItem}) => {
    const dispatch = useDispatch()
    return (
        <>
        <div className="flex justify-between items-center gap-8 mt-[11px]" key={cartProduct.product._id}>
            {
                cartProduct.product.pictures.map((image) =>(
                    <img className='w-[70px] h-[70px] object-cover ' src={image} alt="" />
                ))
            }
            <h2 className='flex flex-col'>
                <p className='text-text__color ml-[14px] font-medium text-base'>{cartProduct.product.name}</p>
                <span className="font-normal text-[15px] text-[#a5a5a5] flex gap-2">SKU: 
                    <span className="text-secondary__text__color">1995751877966</span>
                </span>
            </h2>
            <span className='font-medium ml-[18px] text-secondary__text__color text-base'>${cartProduct.product.price}.00</span>
            <div className="flex ml-[90px] gap-2 items-center">
              <MainButton
              text='-'
                onClick={() => {
                  dispatch(decreaseQuantity(cartProduct.product._id));
                }}
                className="rounded-full py-[5px] px-[9px] text-xl"
              >
              </MainButton>

              <p>{cartProduct.quantity}</p>
              
              <MainButton
              text='+'
              className='rounded-full text-xl py-[5px] px-[8px]'
                onClick={() => {
                  dispatch(increaseQuantity(cartProduct.product._id));
                }}
              >
              </MainButton>

            </div>

            <p className="font-bold text-main ml-[40px] text-base">
                ${ (cartProduct.product.price * cartProduct.quantity).toFixed(2) }
            </p>

            <button
              className=""
              onClick={() => {
                console.log("o'chirildi");
                dispatch(removeFromCart(cartProduct.product._id));
              }}
            >
                <img src={DeleteButton} alt="delete icon" />
            </button>
          </div>
        </>
    );
}

export default CartProduct;
