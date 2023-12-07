import styled from 'styled-components';

export const Style = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Movie = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const MovieImg = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
`;

export const MovieInfo = styled.div`
  flex: 1;
`;

export const MovieName = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const UserScore = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
`;

export const Overview = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;

export const OverviewText = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
`;

export const Genres = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;

export const GenresStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const GenresText = styled.span`
  font-size: 16px;
  color: #007bff;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const GoBackBtn = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

export const AdInfo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  margin-bottom: 20px;
`;

export const InfoItem = styled.li`
  margin-right: 20px;

  a {
    text-decoration: none;
    color: #007bff;
    font-size: 18px;
    font-weight: bold;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #0056b3;
    }
  }
`;