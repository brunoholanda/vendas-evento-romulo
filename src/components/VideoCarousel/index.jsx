import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import * as S from './Styles'; // Ajuste o caminho conforme necessário

const VideoCarousel = ({ videoSources }) => {
  const swiperRef = useRef(null);
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null); // Controla o índice do vídeo em reprodução

  const pauseAllVideos = () => {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      video.pause();
    });
    setPlayingVideoIndex(null); // Nenhum vídeo em reprodução
  };

  const togglePlayPause = (index, videoElement) => {
    if (videoElement.paused) {
      pauseAllVideos(); // Pausa todos os vídeos antes de reproduzir o novo
      videoElement.play();
      setPlayingVideoIndex(index); // Atualiza o estado com o índice do vídeo em reprodução
    } else {
      videoElement.pause();
      setPlayingVideoIndex(null); // Pausa o vídeo atual
    }
  };

  return (
    <S.VideoCarouselContainer>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1.1}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={pauseAllVideos} // Pausa os vídeos ao trocar de slide
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        style={{ height: 'auto' }} // Remover altura fixa
      >
        {videoSources.map((video, index) => (
          <SwiperSlide key={index}>
            <S.VideoContainer>
              <S.Video
                controls
                preload="metadata"
                loading="lazy"
                poster={video.poster} // Adiciona o poster para o vídeo
                playsInline 
              >
                <source src={video.src} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </S.Video>
            </S.VideoContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.VideoCarouselContainer>
  );
};

export default VideoCarousel;
