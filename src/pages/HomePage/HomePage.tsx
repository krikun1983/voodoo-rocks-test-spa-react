import PostList from 'components/PostList';
import React, {useEffect, useRef, useState} from 'react';
import {MyInput} from 'UI';
import debounce from 'utils/debounce';
import apiService from 'api/ServiceApi';
import {PostType, UserType} from 'api/types';
import style from './HomePage.module.scss';

const HomePage: React.FC = () => {
  const [inputClear, setInputClear] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [postsApi, setPostsApi] = useState<PostType[]>([]);
  const [usersApi, setUsersApi] = useState<UserType[]>([]);
  const inputSearch = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    (async () => {
      const posts = await apiService.getPostAll();
      const users = await apiService.getUsersAll();

      setPostsApi(posts);
      setUsersApi(users);
    })();
  }, []);

  const handleSearchClear = () => {
    inputSearch.current.value = '';
    setInputClear(false);
    setInputValue('');
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputClear(e.target.value.length !== 0);
    setInputValue(e.target.value);
  };

  let postsFilter = [...postsApi];
  const idsUsersCurrent = usersApi
    .filter(user =>
      user.name.toLowerCase().includes(inputValue.trim().toLowerCase()),
    )
    .map(user => user.id);
  postsFilter = postsApi.filter(post => idsUsersCurrent.includes(post.userId));

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
        <PostList posts={postsFilter} linkAuthor={true} />
      </div>
    </>
  );
};

export default HomePage;
