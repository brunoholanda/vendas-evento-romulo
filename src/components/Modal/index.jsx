// Modal.js
import React from 'react';
import * as S from './Styles';

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ImageContainer>
          <img src={imageSrc} alt="Imagem do Modal" />
          <S.OverlayText>Garanta sua vaga hoje e ganhe o curso que vai te ensinar a procurar passagens baratas !</S.OverlayText>
        </S.ImageContainer>
        <S.ModalFooter>
          <a href="https://pay.kiwify.com.br/Ak6CJ5R" target="_blank" rel="noopener noreferrer">
            <S.HighlightButton>Garantir Vaga!</S.HighlightButton>
          </a>
          <S.CloseButton onClick={onClose}>Fechar</S.CloseButton>
        </S.ModalFooter>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
