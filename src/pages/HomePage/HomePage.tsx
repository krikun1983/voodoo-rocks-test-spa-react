import React, {useContext, useRef, useState} from 'react';
import PostList from 'components/PostList';
import {ContextAPI} from 'context/contextAPI';
import {MyLoader} from 'UI';
import debounce from 'utils/debounce';
import icon from 'assets/img/magnifier.svg';
import './HomePage.scss';

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
    console.log(e.target.value);

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
      <div className="row d-flex justify-content-center">
        <div className="search">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="addon-wrapping">
                <img src={icon} alt="search" width="20" height="20" />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Enter author name..."
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={debounce(handleSearch, 400)}
            />
          </div>
          {inputClear && (
            <span onClick={handleSearchClear} className="search__clear"></span>
          )}
        </div>
      </div>
      <div className="row">
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
