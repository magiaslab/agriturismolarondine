import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function App() {
  return (
    <>
      <Swiper
      
        spaceBetween={30}
        effect={'fade'}
        
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <section className="hero flex items-center min-h-screen relative z-[1] py-16 lg:py-28 px-0 bg-gray-100 bg-cover bg-no-repeat bg-center text-center bg-[url('/img/image00001.jpeg')]" >
  <div className="w-[calc(100%_-_3rem)] mx-auto max-w-lg sm:max-w-3xl">
  <div className="text-3xl text-secondary font-extrabold font-sans mb-3">Agriturismo La Rondine</div>

<h1 className="text-6xl font-sans font-extrabold text-white mb-2">Qui, dove i rumori non esistono</h1>


    <div className="flex flex-wrap items-center gap-4 justify-center">
    </div>
  </div>
</section>

          
          </SwiperSlide>
        <SwiperSlide>
        <section className="hero flex items-center min-h-screen relative z-[1] py-16 lg:py-28 px-0 bg-gray-100 bg-cover bg-no-repeat bg-center text-center bg-[url('/img/image00003.jpeg')]" >
  <div className="w-[calc(100%_-_3rem)] mx-auto max-w-lg sm:max-w-3xl">


    <div className="flex flex-wrap items-center gap-4 justify-center">
    </div>
  </div>
</section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="hero flex items-center min-h-screen relative z-[1] py-16 lg:py-28 px-0 bg-gray-100 bg-cover bg-no-repeat bg-center text-center bg-[url('/img/image00005.jpeg')]" >
  <div className="w-[calc(100%_-_3rem)] mx-auto max-w-lg sm:max-w-3xl">


    <div className="flex flex-wrap items-center gap-4 justify-center">
    </div>
  </div>
</section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="hero flex items-center min-h-screen relative z-[1] py-16 lg:py-28 px-0 bg-gray-100 bg-cover bg-no-repeat bg-center text-center bg-[url('/img/image00008.jpeg')]" >
  <div className="w-[calc(100%_-_3rem)] mx-auto max-w-lg sm:max-w-3xl">


    <div className="flex flex-wrap items-center gap-4 justify-center">
    </div>
  </div>
</section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="hero flex items-center min-h-screen relative z-[1] py-16 lg:py-28 px-0 bg-gray-100 bg-cover bg-no-repeat bg-center text-center bg-[url('/img/image00010.jpeg')]" >
  <div className="w-[calc(100%_-_3rem)] mx-auto max-w-lg sm:max-w-3xl">


    <div className="flex flex-wrap items-center gap-4 justify-center">
    </div>
  </div>
</section>
        </SwiperSlide>
   
      </Swiper>
    </>
  );
}