import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroBigFlowerImg from '../../assets/images/hero-img1.svg'
import HeroSmallFlowerImg from '../../assets/images/hero-img2.svg'

//  @ts-ignore
import "swiper/css/autoplay"
//  @ts-ignore
import 'swiper/css';
//  @ts-ignore
import 'swiper/css/navigation';
//  @ts-ignore
import 'swiper/css/pagination';
//  @ts-ignore
import 'swiper/css/scrollbar';
import MainButton from '../MainButton';

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true
      }}
    >
      <SwiperSlide>
        <div className="hero__wrapper pt-20 pb-[91px] flex items-center justify-between">
          <div className='hero__info items-baseline flex flex-col '>
            <p className='hero__subtitle uppercase text-text__color font-medium'>Welcome to GreenShop</p>
            <h1 className='font-black uppercase mt-[2px] text-[70px] text-text__color'>
            Let’s Make a Better <span className='text-main'>Planet</span> 
            </h1>
            <p className='text-[#727272] text-sm font-normal'>
            We are an online plant shop offering a wide range of cheap and trendy plants. Use <br />
             our plants to create an unique Urban Jungle. Order your favorite plants!
            </p>
            <MainButton className='font-bold text-base mt-11' text='SHOP NOW' />
          </div>
          <div className='hero__img relative'>
            <img src={HeroBigFlowerImg} alt="flower image" />
            <img src={HeroSmallFlowerImg} className='absolute top-[205px]' alt="small flower image" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="hero__wrapper pt-20 pb-[91px] flex items-center justify-between">
          <div className='hero__info items-baseline flex flex-col '>
            <p className='hero__subtitle uppercase text-text__color font-medium'>Welcome to GreenShop</p>
            <h1 className='font-black uppercase mt-[2px] text-[70px] text-text__color'>
            Let’s Make a Better <span className='text-main'>Planet</span> 
            </h1>
            <p className='text-[#727272] text-sm font-normal'>
            We are an online plant shop offering a wide range of cheap and trendy plants. Use <br />
             our plants to create an unique Urban Jungle. Order your favorite plants!
            </p>
            <MainButton className='font-bold text-base mt-11' text='SHOP NOW' />
          </div>
          <div className='hero__img relative'>
            <img src={HeroBigFlowerImg} alt="flower image" />
            <img src={HeroSmallFlowerImg} className='absolute top-[205px]' alt="small flower image" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="hero__wrapper pt-20 pb-[91px] flex items-center justify-between">
          <div className='hero__info items-baseline flex flex-col '>
            <p className='hero__subtitle uppercase text-text__color font-medium'>Welcome to GreenShop</p>
            <h1 className='font-black uppercase mt-[2px] text-[70px] text-text__color'>
            Let’s Make a Better <span className='text-main'>Planet</span> 
            </h1>
            <p className='text-[#727272] text-sm font-normal'>
            We are an online plant shop offering a wide range of cheap and trendy plants. Use <br />
             our plants to create an unique Urban Jungle. Order your favorite plants!
            </p>
            <MainButton className='font-bold text-base mt-11' text='SHOP NOW' />
          </div>
          <div className='hero__img relative'>
            <img src={HeroBigFlowerImg} alt="flower image" />
            <img src={HeroSmallFlowerImg} className='absolute top-[205px]' alt="small flower image" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};