import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Header,
  Form,
  SearchButton,
  ButtonSpan,
  FormInput,
} from './Seachbar.styled';

const Searchbar = ({ onSubmit, resetPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(searchQuery);
    resetPage(1);
    setSearchQuery('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <ButtonSpan>Search</ButtonSpan>
        </SearchButton>

        <FormInput
          type="text"
          name="searchQuery"
          value={searchQuery}
          onChange={handleQueryChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
