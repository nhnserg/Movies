import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  margin-bottom: 20px;
  max-width: 400px;
  margin: 20px auto;
`;

export const SearchFormInput = styled.input`
  flex: 1;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px 0 0 6px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const SearchBtn = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: 1px solid #007bff;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;