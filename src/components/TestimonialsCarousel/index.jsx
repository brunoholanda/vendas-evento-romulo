import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import * as S from './Styles'; // Ajuste o caminho conforme necessário

// Importe as imagens
import img1 from '../../assets/depoimentos/01.webp';
import img2 from '../../assets/depoimentos/02.webp';
import img3 from '../../assets/depoimentos/03.webp';
import img4 from '../../assets/depoimentos/04.webp';
import img5 from '../../assets/depoimentos/05.webp';
import img6 from '../../assets/depoimentos/06.webp';
import img7 from '../../assets/depoimentos/07.webp';
import img8 from '../../assets/depoimentos/08.webp';
import img9 from '../../assets/depoimentos/09.webp';
import img10 from '../../assets/depoimentos/10.webp';

const testimonialsImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];

const TestimonialsCarousel = () => {
  return (
    <S.CarouselContainer>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1.1}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        style={{ height: 'auto' }}
      >
        {testimonialsImages.map((image, index) => (
          <SwiperSlide key={index}>
            <S.PrintImage src={image} alt={`Depoimento ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.CarouselContainer>
  );
};

export default TestimonialsCarousel;
