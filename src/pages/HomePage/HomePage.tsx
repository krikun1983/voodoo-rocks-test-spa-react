import React, {useRef, useState} from 'react';
import {MyInput} from 'UI';
import debounce from 'utils/debounce';
import style from './HomePage.module.scss';

const HomePage: React.FC = () => {
  const [inputClear, setInputClear] = useState(false);
  const inputSearch = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleSearchClear = () => {
    inputSearch.current.value = '';
    setInputClear(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputClear(e.target.value.length !== 0);
    console.log(e.target.value);
  };

  return (
    <main className={style.main}>
      <div className={style.search}>
        <label className={style.search__icon} htmlFor="search">
          <MyInput
            ref={inputSearch}
            onChange={debounce(handleSearch, 400)}
            id="search"
            type="text"
            placeholder="Enter author name..."
          />
          {inputClear && (
            <span
              onClick={handleSearchClear}
              className={style.search__clear}
            ></span>
          )}
        </label>
      </div>
    </main>
  );
};

export default HomePage;
