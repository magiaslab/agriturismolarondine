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
        <section class="hero flex items-center min-h-screen relative z-[1] py-16 lg:py-28 px-0 bg-gray-100 bg-cover bg-no-repeat bg-center text-center bg-[url('/img/image00001.jpeg')]" >
  <div class="w-[calc(100%_-_3rem)] mx-auto max-w-lg sm:max-w-3xl">
  <div class="text-3xl text-primary font-sans mb-3">This is a Label</div>

<h1 class="text-6xl font-sans font-extrabold text-white mb-2">Every champion was once a contender who refused to give up</h1>

    <p class="leading-normal mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rem neque doloribus impedit explicabo minus laborum cupiditate atque esse consectetur.</p>

    <div class="flex flex-wrap items-center gap-4 justify-center">
      <a href="#0" class="bg-indigo-700 text-white shadow-md text-[1em] px-4 py-2 rounded-md relative inline-flex justify-center items-center whitespace-nowrap cursor-pointer no-underline leading-tight transition-all duration-200 hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700">Download</a>
      <a href="#0" class="no-underline text-gray-900 bg-[linear-gradient(to_right,_#111827_50%,_hsl(221_39%_11%/0.2)_50%)] bg-[length:200%_1px] bg-no-repeat bg-[position:100%_100%] transition-all duration-200 hover:bg-[position:0%_100%]">Learn more</a>
    </div>
  </div>
</section>

          
          </SwiperSlide>
        <SwiperSlide>
        <section class="hero flex items-center min-h-screen relative z-[1] py-16 lg:py-28 px-0 bg-gray-100 bg-cover bg-no-repeat bg-center text-center bg-[url('/img/image00003.jpeg')]" >
  <div class="w-[calc(100%_-_3rem)] mx-auto max-w-lg sm:max-w-3xl">
    <div class="text-3xl text-primary font-sans mb-3">This is a Label</div>

    <h1 class="text-6xl font-sans font-extrabold text-white mb-2">Every champion was once a contender who refused to give up</h1>

    <p class="leading-normal mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rem neque doloribus impedit explicabo minus laborum cupiditate atque esse consectetur.</p>

    <div class="flex flex-wrap items-center gap-4 justify-center">
      <a href="#0" class="bg-indigo-700 text-white shadow-md text-[1em] px-4 py-2 rounded-md relative inline-flex justify-center items-center whitespace-nowrap cursor-pointer no-underline leading-tight transition-all duration-200 hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700">Download</a>
      <a href="#0" class="no-underline text-gray-900 bg-[linear-gradient(to_right,_#111827_50%,_hsl(221_39%_11%/0.2)_50%)] bg-[length:200%_1px] bg-no-repeat bg-[position:100%_100%] transition-all duration-200 hover:bg-[position:0%_100%]">Learn more</a>
    </div>
  </div>
</section>
        </SwiperSlide>
        <SwiperSlide>
        <section class="hero flex items-center min-h-screen relative z-[1] py-16 lg:py-28 px-0 bg-gray-100 bg-cover bg-no-repeat bg-center text-center bg-[url('/img/image00005.jpeg')]" >
  <div class="w-[calc(100%_-_3rem)] mx-auto max-w-lg sm:max-w-3xl">
    <div class="text-xl text-primary mb-3">This is a Label</div>

    <h1 class="text-4xl mb-2">Every champion was once a contender who refused to give up</h1>

    <p class="leading-normal mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rem neque doloribus impedit explicabo minus laborum cupiditate atque esse consectetur.</p>

    <div class="flex flex-wrap items-center gap-4 justify-center">
      <a href="#0" class="bg-indigo-700 text-white shadow-md text-[1em] px-4 py-2 rounded-md relative inline-flex justify-center items-center whitespace-nowrap cursor-pointer no-underline leading-tight transition-all duration-200 hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700">Download</a>
      <a href="#0" class="no-underline text-gray-900 bg-[linear-gradient(to_right,_#111827_50%,_hsl(221_39%_11%/0.2)_50%)] bg-[length:200%_1px] bg-no-repeat bg-[position:100%_100%] transition-all duration-200 hover:bg-[position:0%_100%]">Learn more</a>
    </div>
  </div>
</section>
        </SwiperSlide>
        <SwiperSlide>
        <section class="hero flex items-center min-h-screen relative z-[1] py-16 lg:py-28 px-0 bg-gray-100 bg-cover bg-no-repeat bg-center text-center bg-[url('/img/image00008.jpeg')]" >
  <div class="w-[calc(100%_-_3rem)] mx-auto max-w-lg sm:max-w-3xl">
    <div class="text-sm text-gray-900/40 mb-3">This is a Label</div>

    <h1 class="text-4xl mb-2">Every champion was once a contender who refused to give up</h1>

    <p class="leading-normal mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rem neque doloribus impedit explicabo minus laborum cupiditate atque esse consectetur.</p>

    <div class="flex flex-wrap items-center gap-4 justify-center">
      <a href="#0" class="bg-indigo-700 text-white shadow-md text-[1em] px-4 py-2 rounded-md relative inline-flex justify-center items-center whitespace-nowrap cursor-pointer no-underline leading-tight transition-all duration-200 hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700">Download</a>
      <a href="#0" class="no-underline text-gray-900 bg-[linear-gradient(to_right,_#111827_50%,_hsl(221_39%_11%/0.2)_50%)] bg-[length:200%_1px] bg-no-repeat bg-[position:100%_100%] transition-all duration-200 hover:bg-[position:0%_100%]">Learn more</a>
    </div>
  </div>
</section>
        </SwiperSlide>
        <SwiperSlide>
        <section class="hero flex items-center min-h-screen relative z-[1] py-16 lg:py-28 px-0 bg-gray-100 bg-cover bg-no-repeat bg-center text-center bg-[url('/img/image00010.jpeg')]" >
  <div class="w-[calc(100%_-_3rem)] mx-auto max-w-lg sm:max-w-3xl">
    <div class="text-sm text-gray-900/40 mb-3">This is a Label</div>

    <h1 class="text-4xl mb-2">Every champion was once a contender who refused to give up</h1>

    <p class="leading-normal mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rem neque doloribus impedit explicabo minus laborum cupiditate atque esse consectetur.</p>

    <div class="flex flex-wrap items-center gap-4 justify-center">
      <a href="#0" class="bg-indigo-700 text-white shadow-md text-[1em] px-4 py-2 rounded-md relative inline-flex justify-center items-center whitespace-nowrap cursor-pointer no-underline leading-tight transition-all duration-200 hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700">Download</a>
      <a href="#0" class="no-underline text-gray-900 bg-[linear-gradient(to_right,_#111827_50%,_hsl(221_39%_11%/0.2)_50%)] bg-[length:200%_1px] bg-no-repeat bg-[position:100%_100%] transition-all duration-200 hover:bg-[position:0%_100%]">Learn more</a>
    </div>
  </div>
</section>
        </SwiperSlide>
   
      </Swiper>
    </>
  );
}
