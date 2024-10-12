// Styles.js
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;



export const ImageContainer = styled.div`
  position: relative;
`;

export const OverlayText = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-15deg); // Posição central e rotação na diagonal
  background: rgba(255, 0, 0, 0.7); // Fundo vermelho semi-transparente
  color: white;
  padding: 10px 10px;
  font-size: 1.8em;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
  width: 300px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
  margin-top: 20px;
`;

export const BonusButton = styled.a`
  background-color: #ff5733;
  color: white;
  padding: 12px 40px;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background-color: #ff3c1f;
  }
`;

export const SmallCloseButton = styled.button`
  background: #e0e0e0;
  color: #333;
  border: none;
  padding: 10px 20px;
  font-size: 0.9em;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #c0c0c0;
  }
`;

export const MedalButton = styled.a`
  position: absolute;
  top: 18px; // Ajuste a posição vertical
  left: 72px; // Ajuste a posição horizontal
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: #ff5733;
  transform: translate(-50%, -50%) rotate(-20deg); // Posição central e rotação na diagonal


  img {
    width: 140px; // Ajuste o tamanho da medalha
    height: 130px;
    margin-right: 8px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #888;
  font-size: 1.5em;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #555; // Cor ao passar o mouse
  }
`;