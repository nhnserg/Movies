import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
`;
export const SearchFormInput = styled.input`
  display: inline-block;
  width: 500px;
  height: 40px;
  font: inherit;
  font-size: 20px;
  border: none;
  border-radius: 50px;
  outline: none;
  padding-left: 16px;
  padding-right: 16px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
export const SearchBtn = styled.button`
  background-color: #c2fbd7;
  border-radius: 50px;
  border-width: 0;
  box-shadow: rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0;
  color: #008000;
  cursor: pointer;
  display: inline-block;
  font-family: Arial, sans-serif;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  height: 40px;
  padding: 8px 25px;
  transition: all 200ms;
  &:hover {
    background-color: #afe6c3;
    transform: scale(1.05);
  }
`;
