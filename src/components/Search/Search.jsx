import { SearchForm, SearchFormInput, SearchBtn } from './Search.styled';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export const Search = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(searchParams);
    setSearchParams({ query: inputValue });
    if (inputValue.trim() === '') {
      return;
    }
    onSubmit(inputValue);
  };

  const handleChange = e => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        value={inputValue}
        onChange={handleChange}
      ></SearchFormInput>
      <SearchBtn type="submit">Search</SearchBtn>
    </SearchForm>
  );
};
