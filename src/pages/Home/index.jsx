import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import banner from '../../assets/img/banner.jpg';
import video1 from '../../assets/videos/depoimento-01.mp4';
import video2 from '../../assets/videos/depoimento-02.mp4';
import video3 from '../../assets/videos/depoimento-03.mp4';
import video4 from '../../assets/videos/depoimento-04.mp4';
import video5 from '../../assets/videos/depoimento-05.mp4';
import video6 from '../../assets/videos/depoimento-06.mp4';

import poster1 from '../../assets/videos/depoimento-01.webp';
import poster2 from '../../assets/videos/depoimento-02.webp';
import poster3 from '../../assets/videos/depoimento-03.webp';
import poster4 from '../../assets/videos/depoimento-04.webp';
import poster5 from '../../assets/videos/depoimento-05.webp';
import poster6 from '../../assets/videos/depoimento-06.webp';
import mentor from '../../assets/img/romulo.webp';
import logo from '../../assets/img/logo.webp';

import * as S from './Styles';
import TestimonialsCarousel from '../../components/TestimonialsCarousel';

const videoSources = [
  { src: video1, poster: poster1 },
  { src: video2, poster: poster2 },
  { src: video3, poster: poster3 },
  { src: video4, poster: poster4 },
  { src: video5, poster: poster5 },
  { src: video6, poster: poster6 },
];

const EventPage = () => {
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
    <S.Container>
      {/* Cabeçalho */}
      <S.Header>
        <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
          <S.Button>Garantir Vaga !</S.Button>
        </a>
        <img src={banner} alt="banner da pagina" />
      </S.Header>

      {/* Imagem do Evento */}
      <S.ImageContainer>
        <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
          <S.Button>Garantir Vaga !</S.Button>
        </a>
      </S.ImageContainer>

      {/* O que você vai aprender */}
      <S.Section>
        <S.SubTitle>O que você vai aprender nesse evento?</S.SubTitle>
        <S.List>
          <S.ListItem>✈️ Como definir o seu estilo de viajante e os seus destinos</S.ListItem>
          <S.ListItem>🗺️ Como pesquisar passagens para o seu destino ideal</S.ListItem>
          <S.ListItem>💳 ⁠Como definir o melhor programa para acumular seus pontos/milhas</S.ListItem>
          <S.ListItem>🎯 ⁠Como definir metas de acúmulo claras para a emissão da sua passagem</S.ListItem>
          <S.ListItem>🔍 Ferramentas para monitorar a passagem para o seu destino dos sonhos</S.ListItem>
          <S.ListItem>⏰ ⁠Como saber o melhor momento para emitir a sua passagem</S.ListItem>
        </S.List>

        <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
          <S.Button>Garantir Vaga !</S.Button>
        </a>
      </S.Section>

      {/* Carrossel de Depoimentos em Vídeo */}
      <S.Section>
        <S.SubTitle>Depoimentos de Alunos</S.SubTitle>
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
                  onClick={(e) => togglePlayPause(index, e.target)} // Controle do vídeo
                >
                  <source src={video.src} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </S.Video>
              </S.VideoContainer>
            </SwiperSlide>
          ))}
        </Swiper>
        <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
          <S.Button>Garantir Vaga !</S.Button>
        </a>
      </S.Section>

      {/* Cronograma do Evento */}
      <S.Section>
        <S.SubTitle>Cronograma do Evento</S.SubTitle>
        <p><strong>📅 Data:</strong> 07/12/2024</p>
        <p><strong>⏰ Hora:</strong> 14 h</p>
        <p><strong>📍 Local:</strong> Hotel Manaíra - Sala Rubi</p>

        <S.List>
          <S.ListItem><strong>14:00 h</strong> - Abertura</S.ListItem>
          <S.ListItem><strong>14:20 h</strong> - Escolhendo o seu destino</S.ListItem>
          <S.ListItem><strong>14:50 h</strong> - Dinâmica</S.ListItem>
          <S.ListItem><strong>15:00 h</strong> - Descobrindo onde acumular pontos/milhas</S.ListItem>
          <S.ListItem><strong>15:30 h</strong> - Convidado (a divulgar)</S.ListItem>
          <S.ListItem><strong>15:50 h</strong> - Coffee Break</S.ListItem>
          <S.ListItem><strong>16:00 h</strong> - Definindo suas metas de acúmulo</S.ListItem>
          <S.ListItem><strong>16:30 h</strong> - Convidado (a divulgar)</S.ListItem>
          <S.ListItem><strong>16:50 h</strong> - Sabendo o momento da sua emissão</S.ListItem>
          <S.ListItem><strong>17:20 h</strong> - Convidado (a divulgar)</S.ListItem>
          <S.ListItem><strong>17:40 h</strong> - Encerramento</S.ListItem>
          <S.ListItem><strong>18:00 h</strong> - After (local a divulgar)</S.ListItem>
        </S.List>
        <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
          <S.Button>Garantir Vaga !</S.Button>
        </a>
      </S.Section>

      {/* Depoimentos em Prints */}
      <S.Section>
        <S.SubTitle>Depoimentos de Alunos</S.SubTitle>
        <TestimonialsCarousel />
        <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
          <S.Button>Garantir Vaga !</S.Button>
        </a>
      </S.Section>

      {/* Mentor e História */}
      <S.MentorSection>
        <S.Name>Romulo Dantas</S.Name>
        <S.MentorImage src={mentor} alt="Foto do Mentor" />
        <S.MentorBio>
          Apaixonado por viagens! Ao longo dos anos, viajei de várias formas (sozinho, em casal, com amigos e família) e aprendi diversas estratégias para economizar em passagens, seja com dinheiro ou milhas, além de aproveitar os benefícios dos cartões de crédito para mais conforto.
          <span id="moreContent" style={{ display: 'none' }}>
            <br /> <br />
            Com o nascimento do meu primeiro filho, refinei ainda mais essas técnicas, otimizando roteiros e emissões de passagens, tanto nacionais quanto internacionais, usando milhas de forma inteligente.
            <br /> <br />
            Agora, compartilho todo esse conhecimento neste treinamento para que você também possa viajar mais, pagando menos e aproveitando ao máximo as vantagens de milhas e cartões, desmistificando a ideia de que viajar do Nordeste é caro.
          </span>
          <a
            href="#"
            style={{ color: '#d58325' }}
            onClick={(e) => {
              e.preventDefault();
              const moreContent = document.getElementById('moreContent');
              moreContent.style.display = moreContent.style.display === 'none' ? 'inline' : 'none';
              e.target.innerText = moreContent.style.display === 'none' ? 'Ler Mais' : 'Ler Menos';
            }}
          >
            Ler Mais
          </a>
        </S.MentorBio>
        <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
          <S.Button>Garantir Vaga !</S.Button>
        </a>
      </S.MentorSection>
      <S.Section>
        <S.SubTitle>Valor do Investimento</S.SubTitle>

        <S.LotesContainer>
          <S.LoteCard>
            <S.LoteTitle>🥇 1º Lote - Promoção Inicial</S.LoteTitle>
            <S.LotePrice>R$ 100,00</S.LotePrice>
            <S.LoteDetails>Vagas Limitadas - Garanta o menor preço!</S.LoteDetails>
            <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
              <S.Button>Comprar Agora</S.Button>
            </a>
          </S.LoteCard>

          <S.LoteCard>
            <S.LoteTitle>🥈 2º Lote - Preço Regular</S.LoteTitle>
            <S.LotePrice>R$ 149,00</S.LotePrice>
            <S.LoteDetails>Vagas ainda disponíveis. Não perca!</S.LoteDetails>
            <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
              <S.Button>Comprar Agora</S.Button>
            </a>
          </S.LoteCard>

          <S.LoteCard>
            <S.LoteTitle>🥉 3º Lote - Última Chance</S.LoteTitle>
            <S.LotePrice>R$ 199,00</S.LotePrice>
            <S.LoteDetails>Últimas vagas - Corra e garanta seu lugar!</S.LoteDetails>
            <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
              <S.Button>Comprar Agora</S.Button>
            </a>
          </S.LoteCard>
        </S.LotesContainer>

        <S.LotesDisclaimer>Os valores aumentam conforme os lotes são vendidos. Garanta sua vaga o quanto antes!</S.LotesDisclaimer>
      </S.Section>

      <S.Footer>
        <img src={logo} alt="logo nordestinos pelo mundo" />
      </S.Footer>
    </S.Container>
  );
};

export default EventPage;
