import React from 'react';
import cn from 'classnames';
import style from './Post.module.scss';
import {Link} from 'react-router-dom';
import {PostType, UserType} from 'api/types';

interface Props {
  post: PostType;
  linkAuthor: boolean;
  author: UserType;
}

export const Post: React.FC<Props> = ({post, author, linkAuthor}) => {
  const {title, body} = post;
  const {id, name} = author;

  return (
    <>
      <h3 className={cn(style.post__heading, style.first__letter)}>{title}</h3>
      <p className={cn(style.post__text, style.first__letter)}>{body}</p>
      <address className={style.post__author}>
        {linkAuthor ? (
          <Link to={`user/${id}`}>{name}</Link>
        ) : (
          <span>{name}</span>
        )}
      </address>
    </>
  );
};

export default React.memo(Post);
