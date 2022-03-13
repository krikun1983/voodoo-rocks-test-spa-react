import React from 'react';
import Post from './Post';
import {PostType} from 'api/types';
import style from './PostList.module.scss';

interface Props {
  posts: PostType[];
  linkAuthor: boolean;
}

const PostList: React.FC<Props> = ({posts, linkAuthor}) => {
  return (
    <ul className={style.list}>
      {posts.map(post => {
        return (
          <li key={post.id} className={style.list__item}>
            {<Post post={post} linkAuthor={linkAuthor} />}
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
