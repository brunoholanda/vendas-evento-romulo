import React from 'react';
import * as S from './Styles'; // Ajuste o caminho conforme necessário
import mentor from '../../assets//img/Romulo-2.webp';
const MentorSection = () => {
  const toggleReadMore = (e) => {
    e.preventDefault();
    const moreContent = document.getElementById('moreContent');
    moreContent.style.display = moreContent.style.display === 'none' ? 'inline' : 'none';
    e.target.innerText = moreContent.style.display === 'none' ? 'Ler Mais' : 'Ler Menos';
  };

  return (
    <S.MentorSection>
      <S.Name>Romulo Dantas</S.Name>
      <S.MentorImage src={mentor} alt="Foto do Mentor" loading="lazy" />
      <S.MentorBio>
        Apaixonado por viagens! Ao longo dos anos, viajei de várias formas (sozinho, em casal, com amigos e família) e aprendi diversas estratégias para economizar em passagens, seja com dinheiro ou milhas, além de aproveitar os benefícios dos cartões de crédito para mais conforto.
        <span id="moreContent" style={{ display: 'none' }}>
          <br /> <br />
          Com o nascimento do meu primeiro filho, refinei ainda mais essas técnicas, otimizando roteiros e emissões de passagens, tanto nacionais quanto internacionais, usando milhas de forma inteligente.
          <br /> <br />
          Agora, compartilho todo esse conhecimento neste treinamento para que você também possa viajar mais, pagando menos e aproveitando ao máximo as vantagens de milhas e cartões, desmistificando a ideia de que viajar do Nordeste é caro.
        </span>
        <a href="#" style={{ color: '#d58325' }} onClick={toggleReadMore}>
          Ler Mais
        </a>
      </S.MentorBio>
      <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
        <S.Button>Garantir Vaga !</S.Button>
      </a>
    </S.MentorSection>
  );
};

export default MentorSection;
