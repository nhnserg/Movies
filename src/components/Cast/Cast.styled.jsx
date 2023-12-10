import styled from 'styled-components';

export const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const CastItem = styled.div`
  margin: 10px;
  text-align: center;

  img {
    width: 150px;
    height: 225px;
    object-fit: cover;
    border-radius: 8px;
  }

  h1 {
    margin: 10px 0;
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1rem;
  }
`;

export const NoCastMsg = styled.div`
  text-align: center;
  font-size: 1.2rem;
`;
