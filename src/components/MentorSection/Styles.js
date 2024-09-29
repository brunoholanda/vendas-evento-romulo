import styled from 'styled-components';

export const MentorSection = styled.section`
  text-align: center;
  margin-bottom: 20px;
`;

export const Name = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
  color: #f9f9f9;
  text-align: center;
`;

export const MentorImage = styled.img`
  width: 100%;
  border-radius: 20px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.8);
`;

export const MentorBio = styled.p`
  font-size: 14px;
  color: #f9f9f9;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #d58325;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  margin-top: 10px;
  width: 100%;
  height: 50px;

  @media (min-width: 768px) {
    width: auto;
  }
`;
