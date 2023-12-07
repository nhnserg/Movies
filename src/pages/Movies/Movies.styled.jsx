import styled from 'styled-components';

export const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const MoviesListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const NoResults = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 20px;
`;