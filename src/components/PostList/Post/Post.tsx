import React from 'react';
import {Link} from 'react-router-dom';
import {PostType, UserType} from 'api/types';
import './Post.scss';

interface Props {
  post: PostType;
  linkAuthor: boolean;
  author: UserType;
}

export const Post: React.FC<Props> = ({post, author, linkAuthor}) => {
  const {title, body} = post;
  const {id, name} = author;

  return (
    <div className="card bg-white">
      <div className="d-flex flex-column">
        <h3 className="card__heading card_letter">{title}</h3>
        <p className="card__text card_letter">{body}</p>
        <div className="card__author">
          {linkAuthor ? (
            <Link to={`user/${id}`}>{name}</Link>
          ) : (
            <span>{name}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Post);
