import React from 'react';
import Post from './Post';
import style from './PostList.module.scss';

interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  posts: PostType[];
}

const PostList: React.FC<Props> = ({posts}) => {
  return (
    <ul className={style.list}>
      {posts.map(post => {
        return (
          <li key={post.id} className={style.list__item}>
            {<Post {...post} />}
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(PostList);
