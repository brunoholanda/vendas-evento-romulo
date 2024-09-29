import React from 'react';
import * as S from './Styles'; // Ajuste o caminho conforme necessário

const EventSchedule = () => {
  return (
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
  );
};

export default EventSchedule;
