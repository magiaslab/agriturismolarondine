import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function SliderHomeIt() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/img/campo-al-noce.webp" alt="Campo al Noce" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/campo-al-noce_01.webp" alt="Campo al Noce 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/campo-al-noce_03.webp" alt="Campo al Noce 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/campo-al-noce_04.webp" alt="Campo al Noce 4" />
      </SwiperSlide>
    </Swiper>
  );
}
