import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 20px;

  p {
    color: white;
  }
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color:  #f9f9f9;
  text-align: center;
`;

export const List = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 0;
  text-align: left;
`;

export const ListItem = styled.li`
  background-color: #202226;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  text-align: left;
  color:  #f9f9f9;
  font-size: 15px;
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
