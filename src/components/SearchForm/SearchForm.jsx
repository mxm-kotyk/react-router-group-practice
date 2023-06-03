import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({ setQury }) => {
  const [value, setValue] = useState('');

  const hendlerChange = ({ target: { value } }) => {
    setValue(value)
  }
  const hendlerSubmit = (e) => {
    e.preventDefault()
    setQury({ query: value })
  }

  return (
    <SearchFormStyled onSubmit={hendlerSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select onChange={hendlerChange} aria-label="select" name="region" required>
        <option disabled defaultValue="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
