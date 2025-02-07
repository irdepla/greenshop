import { useEffect, useState } from "react";
import Swiper from "../../components/Swiper";
import { getProducts } from "../../service/products.service";
import { useMutation } from "@tanstack/react-query";

const Home = () => {

    // async function fetchProducts() {
    //     try {
    //         const products1 = await getProducts()
    //         console.log("new products", products1);
    //     } catch (error: any) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     fetchProducts()
    // }, [])


    const mutation = useMutation({
        mutationFn
    });



    console.log("mutation is " , mutation);

    useEffect(() => {
        mutation.mutate()
    }, [])

    return (
        <>
        <main>
            <section className="hero">
                <div className="container">
                    <Swiper />
                </div>
            </section>
            <section className="products">
                <div className="container products__wrapper flex gap-[50px] mt-[26px] ">
                    <div className="w-[310px] h-[774px] border border-black filtered__products "></div>


                    <div className="flex flex-col">
                        <div className="flex justify-between w-[838px]">
                            <p className="flex gap-[37px]">
                                <span className="text-main border-b-[2px] border-main pb-[7px] cursor-pointer">All Plants</span>
                                <span className=" text-main border-b-[2px] border-main pb-[7px] cursor-pointer">New Arrivals</span>
                                <span className=" text-main border-b-[2px] border-main pb-[7px] cursor-pointer">Sale</span>
                            </p>
                            <select className="text-[#3D3D3D] font-normal" name="Short by: Default sorting" id="">
                                <option value="">Short by: Default sorting</option>
                            </select>
                        </div>
                        <span className="border-main border-solid border w-[258px] h-[1px] block m-auto text-center "></span>
                        <div className="mt-6">
                        </div>
                    </div>


                </div>
            </section>
        </main>
        </>
    );
}

export default Home;
