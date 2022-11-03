import { Component } from 'react';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { TfiSearch } from 'react-icons/tfi';

export class Searchbar extends Component {
  state = {
    search: '',
  };
  hendleInputChange = evt => {
    this.setState({ search: evt.currentTarget.value.toLowerCase() });
  };
  hendleSubmit = evt => {
    evt.preventDefault();

    if (this.state.search.trim() === '') {
      alert('Enter data to search!');
      return;
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };
  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.hendleSubmit}>
          <SearchFormButton type="submit">
            <TfiSearch />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.hendleInputChange}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
