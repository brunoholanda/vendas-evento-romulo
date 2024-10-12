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

  button {
    margin-top: 20px;
    background: #f44336;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
  }

  button:first-child {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    color: black;
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
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
  margin-top: 20px;
`;

export const HighlightButton = styled.button`
  background-color: #ff5733; // Cor de destaque
  border: none;
  padding: 12px 25px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  border-radius: 5px;
`;

export const CloseButton = styled.button`
  background: #e0e0e0;
  color: #333;
  border: none;
  padding: 12px 25px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  border-radius: 5px;
  transition: background 0.3s;
  
  &:hover {
    background: #c0c0c0; // Cor ao passar o mouse
  }
`;