import React, {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {PostType, UserFullType} from 'api/types';
import apiService from 'api/ServiceApi';
import {ContextAPI} from 'context/contextAPI';
import {useRoutes} from 'router/routers';

const App: React.FC = () => {
  const routes = useRoutes();
  const [postsApi, setPostsApi] = useState<PostType[]>([]);
  const [usersApi, setUsersApi] = useState<UserFullType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApi = async () => {
    try {
      setIsLoading(true);
      const posts = await apiService.getPostAll();
      const users = await apiService.getUsersAll();
      setPostsApi(posts);
      setUsersApi(users);
    } catch (err) {
      console.error((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <ContextAPI.Provider value={{postsApi, usersApi, isLoading}}>
      <div className="container">
        <BrowserRouter>
          <>{routes}</>
        </BrowserRouter>
      </div>
    </ContextAPI.Provider>
  );
};

export default App;
