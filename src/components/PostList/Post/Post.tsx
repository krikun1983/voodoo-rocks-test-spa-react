import React, {useEffect, useState} from 'react';
import apiService from 'api/ServiceApi';
import cn from 'classnames';
import style from './Post.module.scss';
import {Link} from 'react-router-dom';
import {PostType} from 'api/types';

interface Props {
  post: PostType;
  linkAuthor: boolean;
}

export const Post: React.FC<Props> = ({post, linkAuthor}) => {
  const [author, setAuthor] = useState('');
  const {userId, title, body} = post;

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
        {linkAuthor ? (
          <Link to={`user/${userId}`}>{author}</Link>
        ) : (
          <span>{author}</span>
        )}
      </address>
    </>
  );
};

export default React.memo(Post);
