import Swiper from "../../components/Swiper";
import { getProducts } from "../../service/products.service";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { ProductData } from "../../interfaces/ProductsInteface";
import Card from "../../components/Card";
import SalesImg from "../../assets/images/sales-img.svg";
import FeaturesFlowerImg1 from "../../assets/images/features-img1.svg";
import FeaturesFlowerImg2 from "../../assets/images/features-img2.svg";
import RightArrow from "../../assets/icons/right-arrow-icon.png";
import MainButton from "../../components/MainButton";
import PostImg1 from "../../assets/images/post1.svg";
import PostImg2 from "../../assets/images/post2.svg";
import PostImg3 from "../../assets/images/post3.svg";
import PostImg4 from "../../assets/images/post4.svg";
import { NavLink, useSearchParams } from "react-router";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(1);
  const [countProducts, setCountProducts] = useState(0);

  const query = useQuery({
    queryKey: ["product", searchParams.toString()],
    queryFn: () => getProducts(searchParams, page),
  });


  useEffect(() => {
    query.refetch();
  }, [searchParams, page]);

  useEffect(() => {
    const page = searchParams.get("page")
  const limit  = searchParams.get("limit")
    if (page && limit !== null) {
      searchParams.set("limit", limit);
    searchParams.set("page", page);
    } else {
    }
  }, []);

  function changePageNum(page: number) {
    setPage(page);
    searchParams.set("page", "" + page);
    setSearchParams(searchParams);
  }

  const changeParams = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };

  if (query.isLoading) return <p>Loading...</p>;
  if (query.isError) return <p>Error fetching products</p>;

  return (
    <>
      <ToastContainer />
      <main>
        <section className="hero">
          <div className="container">
            <Swiper />
          </div>
        </section>
        <section className="products">
          <div className="container products__wrapper flex gap-[50px] mt-[26px] ">
            <div className=" pt-[14px] pb-[19px] pl-[18px] pr-[24px] w-[310px] flex-col flex gap-9 filtered__products ">
              <ul className="flex flex-col gap-5">
                <span className="text-text__color font-bold text-lg">
                  Categories
                </span>
                <li
                  style={{}}
                  onClick={() => {
                    changeParams("category", "House Plants");
                  }}
                  className="ml-2"
                >
                  <span className="flex justify-between items-center ">
                    <p className="text-text__color">House Plants</p>
                    <p>(33)</p>
                  </span>
                </li>
                <li
                  onClick={() => {
                    changeParams("category", "Potter Plants");
                  }}
                  className="ml-2"
                >
                  <span className="flex justify-between items-center ">
                    <p className="text-text__color">Potter Plants</p>
                    <p>(12)</p>
                  </span>
                </li>
                <li
                  onClick={() => {
                    changeParams("category", "Seeds");
                  }}
                  className="ml-2"
                >
                  <span className="flex justify-between items-center ">
                    <p className="text-text__color">Seeds</p>
                    <p>(65)</p>
                  </span>
                </li>
                <li
                  onClick={() => {
                    changeParams("category", "Small Plants");
                  }}
                  className="ml-2"
                >
                  <span className="flex justify-between items-center ">
                    <p className="text-text__color">Small Plants</p>
                    <p>(39)</p>
                  </span>
                </li>
                <li
                  onClick={() => {
                    changeParams("category", "Big Plants");
                  }}
                  className="ml-2"
                >
                  <span className="flex justify-between items-center ">
                    <p className="text-text__color">Big Plants</p>
                    <p>(23)</p>
                  </span>
                </li>
                <li
                  onClick={() => {
                    changeParams("category", "Succulents");
                  }}
                  className="ml-2"
                >
                  <span className="flex justify-between items-center ">
                    <p className="text-text__color">Succulents</p>
                    <p>(17)</p>
                  </span>
                </li>
                <li
                  onClick={() => {
                    changeParams("category", "Trerrariums");
                  }}
                  className="ml-2"
                >
                  <span className="flex justify-between items-center ">
                    <p className="text-text__color">Trerrariums</p>
                    <p>(19)</p>
                  </span>
                </li>
                <li
                  onClick={() => {
                    changeParams("category", "Gardening");
                  }}
                  className="ml-2"
                >
                  <span className="flex justify-between items-center ">
                    <p className="text-text__color">Gardening</p>
                    <p>(13)</p>
                  </span>
                </li>
                <li
                  onClick={() => {
                    changeParams("category", "Accessories");
                  }}
                  className="ml-2"
                >
                  <span className="flex justify-between items-center ">
                    <p className="text-text__color">Accessories</p>
                    <p>(18)</p>
                  </span>
                </li>
              </ul>

              <div className="size__filters">
                <h3 className="text-text__color font-bold text-lg">Size</h3>
                <ul className="ml-2 flex flex-col gap-5">
                  <li
                    onClick={() => {
                      changeParams("size", "S");
                    }}
                  >
                    <span className="flex justify-between items-center ">
                      <p className="text-text__color">Small</p>
                      <p>(119)</p>
                    </span>
                  </li>
                  <li
                    onClick={() => {
                      changeParams("size", "M");
                    }}
                  >
                    <span className="flex justify-between items-center ">
                      <p className="text-text__color">Medium</p>
                      <p>(86)</p>
                    </span>
                  </li>
                  <li
                    onClick={() => {
                      changeParams("size", "L");
                    }}
                  >
                    <span className="flex justify-between items-center ">
                      <p className="text-text__color">Large</p>
                      <p>(78)</p>
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="price__filters">Price Range</h2>
              <div className="ml-3 price__filters">
                <p className="text-lg flex items-center gap-2">
                  <span>Price:</span>
                  <input type="range" min={0} max={1500} />
                </p>
                <p className="text-main"> $0 - $1500 </p>

                <div className="py-4">
                  <MainButton text="Filter" />
                </div>
              </div>

              <div className="sales__img w-[290px]">
                <img className="w-full" src={SalesImg} alt="sales image" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between w-[838px]">
                <p className="flex gap-[37px]">
                  <span className="text-main border-b-[2px] border-main pb-[7px] cursor-pointer">
                    All Plants
                  </span>
                  <span className=" text-main border-b-[2px] border-main pb-[7px] cursor-pointer">
                    New Arrivals
                  </span>
                  <span className=" text-main border-b-[2px] border-main pb-[7px] cursor-pointer">
                    Sale
                  </span>
                </p>
                <select
                  className="text-[#3D3D3D] font-normal"
                  name="Short by: Default sorting"
                  id=""
                >
                  <option value="">Short by: Default sorting</option>
                </select>
              </div>
              <span className="border-main mt-[31px] border-solid border w-[258px] h-[1px] block m-auto text-center "></span>
              <div className="grid grid-cols-3 gap-[41px] items-center  ">
                {query.data?.map((products: ProductData) => (
                  <Card key={products._id} product={products} />
                ))}
              </div>

              <Pagination changePageNum={changePageNum} countProducts={countProducts} page={searchParams.get("page")}  />
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
                  Summer cactus <br />& succulents
                </h2>
                <p className="text-right font-normal text-[#727272]">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants
                </p>
                <MainButton
                  className="font-black mt-[10px] gap-2 border items-center border-solid w-[140px] whitespace-nowrap flex-row-reverse"
                  icon={RightArrow}
                  text="Find More"
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <img src={FeaturesFlowerImg2} alt="Features Flower Image" />
              </div>
              <div className="flex items-end flex-col gap-2">
                <h2 className="uppercase text-text__color text-base font-bold">
                  Styling trends <br />& much more
                </h2>
                <p className="text-right font-normal text-[#727272]">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants
                </p>
                <MainButton
                  className="font-black mt-[10px] gap-2 border items-center border-solid w-[140px] whitespace-nowrap flex-row-reverse"
                  icon={RightArrow}
                  text="Find More"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="posts">
          <div className="container mt-[138px] posts__wrapper flex flex-col items-center">
            <h2 className="text-center font-bold text-3xl text-text__color">
              Our Blog Posts
            </h2>
            <p className="text-center mt-[15px] text-secondary__text__color ">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
            <div className="mt-[35px] grid grid-cols-4 justify-center items-center gap-11">
              <div className="flex  flex-col items-center h-full posts__card">
                <img
                  className="w-full h-full  object-cover"
                  src={PostImg1}
                  alt=""
                />
                <div className="posts__info">
                  <div className=" flex flex-col gap-1 pt-[9px] pb-3 pl-[15px] pr-[11px] ">
                    <p className="posts__subtitle text-main text-sm font-medium ">
                      September 12 I Read in 6 minutes
                    </p>
                    <h3 className="posts__title text-text__color font-bold text-xl ">
                      Cactus & Succulent <br />
                      Care Tips
                    </h3>
                    <span className="font-normal text-sm text-secondary__text__color ">
                      Cacti are succulents are easy care plants for any home or
                      patio.
                    </span>
                    <NavLink
                      className="text-text__color hover:text-main after:content-['→'] font-medium"
                      to="/read-more"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center h-full  posts__card ">
                <img
                  className="w-[268px] h-[195px] object-cover"
                  src={PostImg2}
                  alt=""
                />
                <div className="posts__info">
                  <div className=" flex flex-col gap-1 pt-[9px] pb-3 pl-[15px] pr-[11px] ">
                    <p className="posts__subtitle text-main text-sm font-medium ">
                      September 13 I Read in 2 minutes
                    </p>
                    <h3 className="posts__title text-text__color font-bold text-xl ">
                      Top 10 Succulents for <br /> Your Home
                    </h3>
                    <span className="font-normal text-sm text-secondary__text__color ">
                      Best in hanging baskets. Prefers medium to high light.
                    </span>
                    <NavLink
                      className="text-text__color hover:text-main after:content-['→'] font-medium"
                      to="/read-more"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center h-full posts__card">
                <img
                  className="w-full h-full object-cover"
                  src={PostImg3}
                  alt=""
                />
                <div className="posts__info">
                  <div className=" flex flex-col gap-1 pt-[9px] pb-3 pl-[15px] pr-[11px] ">
                    <p className="posts__subtitle text-main text-sm font-medium ">
                      September 15 I Read in 3 minutes
                    </p>
                    <h3 className="posts__title text-text__color font-bold text-xl ">
                      Cacti & Succulent <br /> Care Tips
                    </h3>
                    <span className="font-normal text-sm text-secondary__text__color ">
                      Cacti and succulents thrive in containers and because most
                      are..
                    </span>
                    <NavLink
                      className="text-text__color hover:text-main after:content-['→'] font-medium"
                      to="/read-more"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center h-full posts__card">
                <img
                  className="w-full h-full object-cover"
                  src={PostImg4}
                  alt=""
                />
                <div className="posts__info">
                  <div className=" flex flex-col gap-1 pt-[9px] pb-3 pl-[15px] pr-[11px] ">
                    <p className="posts__subtitle text-main text-sm font-medium ">
                      September 15 I Read in 2 minutes
                    </p>
                    <h3 className="posts__title text-text__color font-bold text-xl ">
                      Best Houseplants <br /> Room by Room
                    </h3>
                    <span className="font-normal text-sm text-secondary__text__color ">
                      The benefits of houseplants are endless. In addition to..
                    </span>
                    <NavLink
                      className="text-text__color hover:text-main after:content-['→'] font-medium"
                      to="/read-more"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
