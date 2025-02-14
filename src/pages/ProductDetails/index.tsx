import { useMutation, useQuery } from "@tanstack/react-query";
import { data, useParams } from "react-router";
import { getProductById, getProducts } from "../../service/products.service";
import { ProductData } from "../../interfaces/ProductsInteface";
import MainButton from "../../components/MainButton";
import HeartIcon from "../../assets/icons/green-heart-icon.svg"
import { styled } from "@mui/material";
import ModalButton from "../../components/ModalButton";
import { createReview } from "../../service/review.service";

const ProductDetails = () => {

    interface ProductDetails {
        product: ProductData
    }

    const {id} = useParams<{id: string}>()
    const {data: product, isLoading, error } = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProductById(id as string ),
    })
    



    if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products</p>;
    
    return (
        <>
        <div className="container product__wrapper mt-[43px] flex flex-col">
        <div className="flex justify-between gap-[52px] ">


        <div className="product__pictures flex gap-[30px]">
            <div>
            </div>
        <div className="w-[444px] h-[444px] ">
        {product?.pictures.map((image: string, index: number) => (
          <img key={index} className=" w-[404px] h-[404px] object-cover mx-auto t-[25px] pr-[23px] pb-[15px] pl-[17px] " src={image} alt="" />
        ))}
        </div>

        </div>
        <div className="product__info flex flex-col ">
            <h2 className="text-[28px] font-bold text-text__color ">{product?.name}</h2>
            <div className="mt-5 flex items-center gap-[260px] border-b border-[#46A35880] pb-3 ">
                <span className="text-main font-bold text-[22px]">
                    ${product?.price}.00
                </span>
                <span className="flex gap-[11px]">
                    <span>{product?.rank}</span>
                    <span>19 Customer Review</span>
                </span>
            </div>
            <div className=" flex flex-col mt-[15px]">
                <span className="font-medium text-[15px]">Short Description:</span>
                <p className="mt-[10px] font-normal text-sm text-secondary__text__color">{product?.description}</p>
                <span className="mt-6 font-medium text-text__color">Size:</span>
                <div className="mt-[17px] flex gap-[10px]">
                    <span className="rounded-[50%] border-main border-solid border py-[6px] px-3 ">S</span>
                    <span className="rounded-[50%]  border-solid border py-[6px] px-3 ">M</span>
                    <span className="rounded-[50%]  border-solid border py-[6px] px-3 ">L</span>
                    <span className="rounded-[50%]  border-solid border py-[6px] px-3 ">XL</span>
                </div>
                <div className="flex mt-[23px]">
                    <span className="flex items-center gap-[23px] ">
                        <MainButton className="px-[18px] rounded-[29px] " text="-" />
                        <span>1</span>
                        <MainButton className="px-[15px] rounded-[31px] " text="+" />
                    </span>
                    <MainButton className="px-8 ml-[26px]" text="BUY NOW" />
                    <MainButton className="border-main border bg-transparent ml-[10px] px-5 pt-[11px] pb-[9px] text-main uppercase" text="Add to cart" />
                    <MainButton className=" items-center border-main border bg-transparent ml-[10px] px-[10px] pt-[11px] pb-[9px] text-[#46A358]" icon={HeartIcon}  />
                </div>
                <div className="flex flex-col mt-[26px] gap-[10px]">
                    <span className="font-normal text-[15px] text-[#a5a5a5] flex gap-2">SKU: 
                        <span className="text-secondary__text__color">1995751877966</span>
                    </span>
                    <span className="font-normal text-[15px] text-[#a5a5a5] flex gap-2">Categories: 
                        <span className="text-secondary__text__color"> Potter Plants</span>
                    </span>
                    <span className="font-normal text-[15px] text-[#a5a5a5] flex gap-2">Tags: 
                        <span className="text-secondary__text__color">Home, Garden, Plants</span>
                    </span>
                </div>
                <p className="text-text__color font-medium mt-[18px]">Share this products:</p>
            </div>
        </div>

        </div>


        <div className="mt-[92px] flex flex-col">
                <div className="border-b border-[#46A35880]">
                    <span className="active:border-b active:border-main text-main font-bold text-[17px]">Product Description</span>
                    <span className="ml-[30px] text-text__color">Reviews (19)</span>
                </div>
                <ModalButton buttonText="Add review" />
                <div className="mt-[18px] text-secondary__text__color">
                    <p>{product?.description}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default ProductDetails;
