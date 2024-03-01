import { useState, useEffect } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';
const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchStr();
  const [searchOption, setSearchOption] = useState('shows');
  // 1)mounts 2)rerender 3)unmount
  console.log('Component render');
  useEffect(() => {
    console.log('Components mounts');
  }, []);
  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };
  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };
  const onSubmit = ev => {
    ev.preventDefault();
    const options = {
      q: searchStr,
      searchOption,
    };
    onSearch(options);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <CustomRadio
          label="Shows"
          name="search-option"
          value="shows"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}
        />
        <CustomRadio
          label="Actors"
          name="search-option"
          value="actors"
          checked={searchOption === 'actors'}
          onChange={onRadioChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
