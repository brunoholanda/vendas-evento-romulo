import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 10px;
  font-family: Arial, sans-serif;
  max-width: 100%; /* Use 100% para telas pequenas */
  margin: 0 auto;
  font-family: var(--fonte-secundaria);

  @media (min-width: 768px) {
    max-width: 768px; /* Aplicar largura máxima para tablets e acima */

    .button-especial {
      display: none;
    }
  }

  @media (min-width: 1280px) {
    max-width: 1280px; /* Aplicar largura máxima para desktops */
  }
`;



export const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
  margin: 0 auto;
  position: relative;

  img {
    width: 320px;
    height: 430px;
    border-radius: 15px;
    margin-top: 25px;
  }
`;

export const MedalImage = styled.img`
  position: absolute;
  top: 80px;
  left: -20px;
  width: 110px !important;  // Ajuste o tamanho da medalha conforme necessário
  height: 105px !important;
  z-index: 1;
  transform: rotate(-20deg); // Posição central e rotação na diagonal


`;


export const Button = styled.button`
  padding: 10px 20px;
  background-color: #d58325;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  margin-top: 10px;
  width: 100%;
  height: 50px;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Section = styled.section`
  margin-bottom: 20px;

  p {
    color: white;
  }

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

export const SubTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color:  #f9f9f9;
  text-align: center;
`;

export const Name = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
  color:  #f9f9f9;
  text-align: center;
`;

export const List = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 0;
  text-align: left;
`;

export const ListItem = styled.li`
  background-color: #202226;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  text-align: left;
  color:  #f9f9f9;
  font-size: 15px;
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

export const PlayPauseButton = styled.div`
  position: absolute;
  font-size: 50px;
  color: white;
  cursor: pointer;
  pointer-events: all;
  opacity: 0.2;

`;

export const PrintContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;

export const PrintImage = styled.img`
  width: 48%;
  border-radius: 8px;
`;

export const MentorSection = styled.section`
  text-align: center;
  margin-bottom: 20px;
`;

export const MentorImage = styled.img`
  width: 100%;
  border-radius: 20px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.8);
`;

export const MentorBio = styled.p`
  font-size: 14px;
  color:  #f9f9f9;
`;

export const LotesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export const LoteCard = styled.div`
  background-color: #202226;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const LoteTitle = styled.h3`
  font-size: 1.5rem;
  color: #d58325;
  margin-bottom: 10px;
`;

export const LotePrice = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const LoteDetails = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 20px;
`;

export const LotesDisclaimer = styled.p`
  margin-top: 30px;
  font-size: 1rem;
  color: #999;
`;

export const Footer = styled.footer`
  margin: 1.5rem 0 0 0;
  display: flex;
  justify-content: center;

  img {
    width: 150px;
    height: 60px;
  }
`;
