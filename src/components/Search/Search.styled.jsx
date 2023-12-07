import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

export const SearchFormInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  flex: 1;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const SearchBtn = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;