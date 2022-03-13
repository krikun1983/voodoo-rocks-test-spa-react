import React, {useEffect, useState} from 'react';
import apiService from 'api/ServiceApi';
import cn from 'classnames';
import style from './Post.module.scss';
import {Link} from 'react-router-dom';

interface Props {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const Post: React.FC<Props> = ({id, userId, title, body}) => {
  const [author, setAuthor] = useState('');

  useEffect(() => {
    (async () => {
      const user = await apiService.getUserById(userId);
      setAuthor(user.name);
    })();
  }, []);

  return (
    <>
      <h3 className={cn(style.post__heading, style.first__letter)}>{title}</h3>
      <p className={cn(style.post__text, style.first__letter)}>{body}</p>
      <address className={style.post__author}>
        <Link to={`user/${id}`}>{author}</Link>
      </address>
    </>
  );
};

export default React.memo(Post);
