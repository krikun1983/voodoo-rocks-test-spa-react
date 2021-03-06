import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import UserPage from 'pages/UserPage';

const publicRoutes = [
  {path: '/', element: HomePage},
  {path: '/user/:id', element: UserPage},
  {path: '*', element: NotFoundPage},
];

export const useRoutes = (): JSX.Element => (
  <Routes>
    {publicRoutes.map(route => (
      <Route path={route.path} element={<route.element />} key={route.path} />
    ))}
  </Routes>
);
