import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 20px;
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: #f9f9f9;
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
  color: #f9f9f9;
  margin-bottom: 10px;
`;

export const LoteDetails = styled.p`
  font-size: 1rem;
  color: #f9f9f9;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #d58325;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  width: 100%;
  height: 50px;
`;

export const LotesDisclaimer = styled.p`
  margin-top: 30px;
  font-size: 1rem;
  color: #999;
`;
