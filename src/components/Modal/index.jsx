import React from 'react';
import * as S from './Styles';
import MedalImage from '../../assets/img/medalha.webp';

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ImageContainer>
          <img src={imageSrc} alt="Imagem do Modal" />
          <S.OverlayText>Garanta sua vaga hoje e ganhe o curso que vai te ensinar a procurar passagens baratas!</S.OverlayText>
        </S.ImageContainer>
        <S.MedalButton href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
          <img src={MedalImage} alt="Medalha" />
        </S.MedalButton>
        <S.ModalFooter>
          <S.BonusButton href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
            Garantir Bônus !
          </S.BonusButton>
          <S.SmallCloseButton onClick={onClose}>Saiba mais...</S.SmallCloseButton>
        </S.ModalFooter>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
