import React from 'react';
import Post from './Post';
import {PostType, UserType} from 'api/types';
import style from './PostList.module.scss';

interface Props {
  posts: PostType[];
  users: UserType[];
  linkAuthor: boolean;
}

const PostList: React.FC<Props> = ({posts, users, linkAuthor}) => {
  return (
    <ul className={style.list}>
      {posts.map(post => {
        const userOfPost = users.find(user => user.id === post.userId);

        return (
          <li key={post.id} className={style.list__item}>
            {
              <Post
                post={post}
                linkAuthor={linkAuthor}
                author={userOfPost as UserType}
              />
            }
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
