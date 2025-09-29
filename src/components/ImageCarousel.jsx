// src/components/ImageCarousel.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../App.css';

const images = [
  {
    src: '/images/dog2.jpg',
    alt: 'K-9 Unit',
    caption: 'Guard Your Home with Our Watchdog',
  },
  {
    src: '/images/cctv1.jpg',
    alt: 'CCTV Surveillance',
    caption: '24/7 Smart CCTV Monitoring',
  },
  {
    src: '/images/cctv2.jpg',
    alt: 'Night Vision',
    caption: 'See Clearly, Even in the Dark',
  },
];

export default function ImageCarousel() {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        effect="fade"
        className="my-swiper"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="carousel-slide">
              <img
                src={img.src} // ✅ direct src instead of lazy
                className="carousel-image"
                alt={img.alt}
              />
              <div className="carousel-overlay">
                <h2>{img.alt}</h2>
                <p>{img.caption}</p>
                <button className="carousel-btn">Get a Quote</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
