import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackBtn = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const AdLinksWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const AdLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Scroll = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

// Дополнительные стили, связанные с MovieInfo (предположим, что MovieInfo - это отдельный компонент)
export const MovieInfo = styled.div`
  /* Ваши стили для информации о фильме */
`;

// ... (остальные стили, если требуется)
