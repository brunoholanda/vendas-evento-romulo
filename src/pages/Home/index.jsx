import React, { Suspense, lazy } from 'react';

const VideoCarousel = lazy(() => import('../../components/VideoCarousel'));
const EventSchedule = lazy(() => import('../../components/EventSchedule'));
const MentorSection = lazy(() => import('../../components/MentorSection'));
const InvestmentValueSection = lazy(() => import('../../components/InvestmentValueSection'));
const TestimonialsCarousel = lazy(() => import('../../components/TestimonialsCarousel'));

import banner from '../../assets/img/banner.jpg';
import logo from '../../assets/img/logo.webp';

import * as S from './Styles';




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


const videoSources = [
  { src: video1, poster: poster1 },
  { src: video2, poster: poster2 },
  { src: video3, poster: poster3 },
  { src: video4, poster: poster4 },
  { src: video5, poster: poster5 },
  { src: video6, poster: poster6 },
];




const EventPage = () => {
  return (
    <S.Container>
      <S.Header>
        <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
          <S.Button>Garantir Vaga !</S.Button>
        </a>
        <img src={banner} alt="banner da página" loading="lazy" />
      </S.Header>
      <S.ImageContainer>
        <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
          <S.Button>Garantir Vaga !</S.Button>
        </a>
      </S.ImageContainer>
      <S.Section>
        <S.SubTitle>O que você vai aprender nesse evento?</S.SubTitle>
        <S.List>
          <S.ListItem>✈️ Como definir o seu estilo de viajante e os seus destinos</S.ListItem>
          <S.ListItem>🗺️ Como pesquisar passagens para o seu destino ideal</S.ListItem>
          <S.ListItem>💳 Como definir o melhor programa para acumular seus pontos/milhas</S.ListItem>
          <S.ListItem>🎯 Como definir metas de acúmulo claras para a emissão da sua passagem</S.ListItem>
          <S.ListItem>🔍 Ferramentas para monitorar a passagem para o seu destino dos sonhos</S.ListItem>
          <S.ListItem>⏰ Como saber o melhor momento para emitir a sua passagem</S.ListItem>
        </S.List>
        <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
          <S.Button>Garantir Vaga !</S.Button>
        </a>
      </S.Section>
      <S.Section>
        <S.SubTitle>Depoimentos de Alunos</S.SubTitle>
        <Suspense fallback={<div>Carregando...</div>}>
          <VideoCarousel videoSources={videoSources} />
        </Suspense>
        <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
          <S.Button>Garantir Vaga !</S.Button>
        </a>
      </S.Section>
      <Suspense fallback={<div>Carregando...</div>}>
        <EventSchedule />
      </Suspense>
      <S.Section>
        <S.SubTitle>Depoimentos de Alunos</S.SubTitle>
        <Suspense fallback={<div>Carregando...</div>}>
          <TestimonialsCarousel />
        </Suspense>
        <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
          <S.Button>Garantir Vaga !</S.Button>
        </a>
      </S.Section>
      <Suspense fallback={<div>Carregando...</div>}>
        <MentorSection />
      </Suspense>
      <Suspense fallback={<div>Carregando...</div>}>
        <InvestmentValueSection />
      </Suspense>
      <S.Footer>
        <img src={logo} alt="logo nordestinos pelo mundo" loading="lazy" />
      </S.Footer>
    </S.Container>
  );
};

export default EventPage;
