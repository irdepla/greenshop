import { useEffect, useState } from "react";
import Swiper from "../../components/Swiper";
import { getProducts } from "../../service/products.service";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { ProductData } from "../../interfaces/ProductsInteface";
import Card from "../../components/Card";
import SalesImg from "../../assets/images/sales-img.svg"
import FeaturesFlowerImg1 from "../../assets/images/features-img1.svg"
import FeaturesFlowerImg2 from "../../assets/images/features-img2.svg"
import RightArrow from "../../assets/icons/right-arrow-icon.png"
import MainButton from "../../components/MainButton";

const Home = () => {


    const [products, setProducts] = useState<ProductData[]>([])

    const mutation = useMutation( {

        mutationFn: getProducts,
        onSuccess: (data: ProductData[]) => {
            console.log("product data:", data);
            setProducts(data)
        },
        onError: (error: AxiosError) => {
            toast.error(((error?.response?.data) as unknown as {error: string}).error || "Xatolik yuz berdi")
          }
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
                    <div className=" pt-[14px] pb-[19px] pl-[18px] pr-[24px] w-[310px] flex-col flex gap-9 border border-black filtered__products ">
                        <ul className="flex flex-col gap-5">
                            <span className="text-text__color font-bold text-lg">Categories</span>
                            <li className="ml-2">
                                <span className="flex justify-between items-center ">
                                    <p className="text-text__color">House Plants</p>
                                    <p>(33)</p>
                                </span>
                            </li>
                            <li className="ml-2">
                                <span className="flex justify-between items-center ">
                                    <p className="text-text__color">Potter Plants</p>
                                    <p>(12)</p>
                                </span>
                            </li>
                            <li className="ml-2">
                                <span className="flex justify-between items-center ">
                                    <p className="text-text__color">Seeds</p>
                                    <p>(65)</p>
                                </span>
                            </li>
                            <li className="ml-2">
                                <span className="flex justify-between items-center ">
                                    <p className="text-text__color">Small Plants</p>
                                    <p>(39)</p>
                                </span>
                            </li>
                            <li className="ml-2">
                                <span className="flex justify-between items-center ">
                                    <p className="text-text__color">Big Plants</p>
                                    <p>(23)</p>
                                </span>
                            </li>
                            <li className="ml-2">
                                <span className="flex justify-between items-center ">
                                    <p className="text-text__color">Succulents</p>
                                    <p>(17)</p>
                                </span>
                            </li>
                            <li className="ml-2">
                                <span className="flex justify-between items-center ">
                                    <p className="text-text__color">Trerrariums</p>
                                    <p>(19)</p>
                                </span>
                            </li>
                            <li className="ml-2">
                                <span className="flex justify-between items-center ">
                                    <p className="text-text__color">Gardening</p>
                                    <p>(13)</p>
                                </span>
                            </li>
                            <li className="ml-2">
                                <span className="flex justify-between items-center ">
                                    <p className="text-text__color">Accessories</p>
                                    <p>(18)</p>
                                </span>
                            </li>
                        </ul>


                        <div className="price__filters ">

                        </div>


                        <div className="size__filters">
                            <h3 className="text-text__color font-bold text-lg">Size</h3>
                            <ul className="ml-2 flex flex-col gap-5">
                            <li>
                                <span className="flex justify-between items-center ">
                                    <p className="text-text__color">Small</p>
                                    <p>(119)</p>
                                </span>
                            </li>
                            <li>
                                <span className="flex justify-between items-center ">
                                    <p className="text-text__color">Medium</p>
                                    <p>(86)</p>
                                </span>
                            </li>
                            <li>
                                <span className="flex justify-between items-center ">
                                    <p className="text-text__color">Large</p>
                                    <p>(78)</p>
                                </span>
                            </li>
                            </ul>
                        </div>


                        <div className="sales__img w-[290px]">
                            <img className="w-full" src={SalesImg} alt="sales image" />
                        </div>
                    </div>


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
                        <span className="border-main mt-[31px] border-solid border w-[258px] h-[1px] block m-auto text-center "></span>
                        <div className="grid grid-cols-3 gap-[41px] items-center  ">
                            {
                                products.map((product: ProductData) => (
                                    <Card key={product._id} product={product} />
                                ))
                            }
                        </div>
                    </div>


                </div>
            </section>
            <section className="features">
                <div className="container features__wrapper mt-[94px] flex justify-between gap-[30px] items-center">
                    <div className="flex justify-between items-center">
                        <div>
                            <img src={FeaturesFlowerImg1} alt="Features Flower Image" />
                        </div>
                        <div className="flex items-end flex-col gap-2">
                            <h2 className="uppercase text-text__color text-base font-bold">
                                Summer cactus <br />
                                 & succulents
                            </h2>
                            <p className="text-right font-normal text-[#727272]">
                            We are an online plant shop offering a wide
                            range of cheap and trendy plants
                            </p>
                            <MainButton className="font-black mt-[10px] gap-2 border items-center border-solid w-[140px] whitespace-nowrap flex-row-reverse" icon={RightArrow}  text="Find More"  />
                        </div>
                    </div>


                    <div className="flex justify-between items-center">
                        <div>
                            <img src={FeaturesFlowerImg2} alt="Features Flower Image" />
                        </div>
                        <div className="flex items-end flex-col gap-2">
                            <h2 className="uppercase text-text__color text-base font-bold">
                            Styling trends <br />
                            & much more
                            </h2>
                            <p className="text-right font-normal text-[#727272]">
                            We are an online plant shop offering a wide
                            range of cheap and trendy plants
                            </p>
                            <MainButton className="font-black mt-[10px] gap-2 border items-center border-solid w-[140px] whitespace-nowrap flex-row-reverse" icon={RightArrow}  text="Find More"  />
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}

export default Home;