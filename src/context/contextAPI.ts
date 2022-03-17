import {createContext} from 'react';
import {PostType, UserFullType} from 'api/types';

type ContextProps = {
  usersApi: UserFullType[];
  postsApi: PostType[];
  isLoading: boolean;
};

export const ContextAPI = createContext({} as ContextProps);
