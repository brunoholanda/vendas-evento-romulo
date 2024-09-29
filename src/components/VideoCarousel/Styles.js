import styled from 'styled-components';

export const VideoCarouselContainer = styled.div`
  margin: 20px 0;
  
  .swiper-button-prev,
  .swiper-button-next {
    color: #d58325; /* Cor personalizada das setas */
    font-size: 20px;
    &:after {
      font-size: 30px;
    }
  }

  /* Customização das bolinhas de paginação */
  .swiper-pagination-bullet {
    background-color: #d58325; /* Cor personalizada das bolinhas */
    opacity: 0.8;
  }

  .swiper-pagination-bullet-active {
    background-color: #d58325; /* Cor personalizada da bolinha ativa */
    opacity: 1;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Video = styled.video`
  width: 100%;
  aspect-ratio: 9 / 16;
  border-radius: 8px;
  object-fit: cover;
  max-height: 100vh;
`;
