import React, {useContext, useRef, useState} from 'react';
import PostList from 'components/PostList';
import {ContextAPI} from 'context/contextAPI';
import {MyInput, MyLoader} from 'UI';
import debounce from 'utils/debounce';
import style from './HomePage.module.scss';

const HomePage: React.FC = () => {
  const context = useContext(ContextAPI);
  const [inputClear, setInputClear] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const inputSearch = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleSearchClear = () => {
    inputSearch.current.value = '';
    setInputClear(false);
    setInputValue('');
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputClear(e.target.value.length !== 0);
    setInputValue(e.target.value);
  };

  let postsFilter = [...context.postsApi];
  const idsUsersCurrent = context.usersApi
    .filter(user =>
      user.name.toLowerCase().includes(inputValue.trim().toLowerCase()),
    )
    .map(user => user.id);
  postsFilter = context.postsApi.filter(post =>
    idsUsersCurrent.includes(post.userId),
  );

  return (
    <>
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
      <div>
        {context.isLoading ? (
          <MyLoader />
        ) : (
          <PostList
            posts={postsFilter}
            users={context.usersApi}
            linkAuthor={true}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
