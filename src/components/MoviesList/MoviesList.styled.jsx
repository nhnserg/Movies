import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const MovieItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  a {
    display: block;
    padding: 15px;
    text-decoration: none;
    color: #333;
    font-size: 16px;
    font-weight: bold;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #007bff;
    }
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 300px; /* Вы можете настроить высоту по своему усмотрению */

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 300px;
  }
`;

export const NoResults = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 20px;
  text-align: center;
`;

export const MovieDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;

export const DefaultImage = styled.img`
  width: 100%;
  height: 300px; /* Вы можете настроить высоту по своему усмотрению */
  object-fit: cover;
  border-radius: 8px;
`;

export const PlaceholderText = styled.span`
  color: #777;
`;

export const DefaultPoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 15px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #007bff;
  }
`;

export const VoteAvr = styled.span`
  display: block;
  margin-top: 10px;
  padding: 5px;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  background-color: ${({ bgColor }) => bgColor || '#555'}; // Цвет фона в зависимости от значения props.bgColor
`;

export const MovieTitle = styled.h3`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const MovieRelease = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  font-size: 14px;
  color: #666;

  svg {
    margin-right: 5px;
  }
`;
export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const Poster = styled.img`
  width: 250px;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 300px;
  }
`;
export const Item = styled.li`
  position: relative;
  transition: transform 350ms linear;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    width: calc((100%) - 80px) / 3;
  }

  @media screen and (min-width: 1440px) {
    width: calc((100%) - 200px) / 6;
  }
`;