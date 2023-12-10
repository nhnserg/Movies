import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const NotFoundMsg = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

const GoMainPageLink = styled.a`
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export { NotFoundWrapper, NotFoundMsg, GoMainPageLink };