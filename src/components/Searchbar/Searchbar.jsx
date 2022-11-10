import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { TfiSearch } from 'react-icons/tfi';
import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const hendleInputChange = evt => {
    setSearch(evt.currentTarget.value.toLowerCase());
  };
  const hendleSubmit = evt => {
    evt.preventDefault();

    if (!search.trim()) {
      alert('Enter data to search!');
      return;
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={hendleSubmit}>
        <SearchFormButton type="submit">
          <TfiSearch />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="search"
          value={search}
          onChange={hendleInputChange}
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBar>
  );
};
