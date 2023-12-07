import styled from 'styled-components';
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