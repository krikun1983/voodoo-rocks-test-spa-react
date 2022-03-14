import PostList from 'components/PostList';
import React, {useEffect, useRef, useState} from 'react';
import {MyInput, MyLoader} from 'UI';
import debounce from 'utils/debounce';
import apiService from 'api/ServiceApi';
import {PostType, UserType} from 'api/types';
import style from './HomePage.module.scss';

const HomePage: React.FC = () => {
  const [inputClear, setInputClear] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [postsApi, setPostsApi] = useState<PostType[]>([]);
  const [usersApi, setUsersApi] = useState<UserType[]>([]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const inputSearch = useRef() as React.MutableRefObject<HTMLInputElement>;

  const fetchPosts = async () => {
    try {
      setIsPostLoading(true);
      const posts = await apiService.getPostAll();
      setPostsApi(posts);
    } catch (err) {
      console.error((err as Error).message);
    } finally {
      setIsPostLoading(false);
    }
  };
  const fetchUsers = async () => {
    try {
      setIsPostLoading(true);
      const users = await apiService.getUsersAll();
      setUsersApi(users);
    } catch (err) {
      console.error((err as Error).message);
    }
  };
  useEffect(() => {
    fetchPosts();
    fetchUsers();
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
        {isPostLoading ? (
          <MyLoader />
        ) : (
          <PostList posts={postsFilter} linkAuthor={true} />
        )}
      </div>
    </>
  );
};

export default HomePage;
