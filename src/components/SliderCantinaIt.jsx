import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function SliderCantinaIt() {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, EffectFade]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/img/vini-di-bolgheri_03.webp" alt="Vini di Bolgheri" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/Vino-di-Bolgheri-03.webp" alt="Vino di Bolgheri 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/Vino-di-Bolgheri-07.webp" alt="Vino di Bolgheri 7" />
      </SwiperSlide>
    </Swiper>
  );
}
