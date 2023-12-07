import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;

  nav {
    display: flex;
    justify-content: center;

    a {
      color: #fff;
      text-decoration: none;
      margin: 0 15px;
      font-size: 18px;
      font-weight: bold;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #007bff;
      }
    }
  }
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #00bfff;
  }
`;
