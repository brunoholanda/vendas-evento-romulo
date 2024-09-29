import React from 'react';
import * as S from './Styles'; // Ajuste o caminho conforme necessário

const InvestmentValueSection = () => {
  return (
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
          <S.LotePrice>R$ 120,00</S.LotePrice>
          <S.LoteDetails>Vagas ainda disponíveis. Não perca!</S.LoteDetails>
          <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
            <S.Button>Comprar Agora</S.Button>
          </a>
        </S.LoteCard>

        <S.LoteCard>
          <S.LoteTitle>🥉 3º Lote - Última Chance</S.LoteTitle>
          <S.LotePrice>R$ 140,00</S.LotePrice>
          <S.LoteDetails>Últimas vagas - Corra e garanta seu lugar!</S.LoteDetails>
          <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
            <S.Button>Comprar Agora</S.Button>
          </a>
        </S.LoteCard>
      </S.LotesContainer>

      <S.LotesDisclaimer>
        Os valores aumentam conforme os lotes são vendidos. Garanta sua vaga o quanto antes!
      </S.LotesDisclaimer>
    </S.Section>
  );
};

export default InvestmentValueSection;
