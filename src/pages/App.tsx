import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {useRoutes} from 'router/routers';
import apiService from '../api/ServiceApi';

const App: React.FC = () => {
  const routes = useRoutes();
  useEffect(() => {
    (async () => {
      const users = await apiService.getUsersAll();
      const currentUser = await apiService.getUserById(1);
      const posts = await apiService.getPostAll();
      console.log(users);
      console.log(currentUser);
      console.log(posts);
    })();
  }, []);
  return (
    <BrowserRouter>
      <>{routes}</>
    </BrowserRouter>
  );
};

export default App;
