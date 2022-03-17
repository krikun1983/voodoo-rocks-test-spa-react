import React, {Fragment} from 'react';
import Post from './Post';
import {PostType, UserType} from 'api/types';
import './PostList.scss';

interface Props {
  posts: PostType[];
  users: UserType[];
  linkAuthor: boolean;
}

const PostList: React.FC<Props> = ({posts, users, linkAuthor}) => {
  return (
    <div className="card-columns">
      {posts.map(post => {
        const userOfPost = users.find(user => user.id === post.userId);
        return (
          <Fragment key={post.id}>
            {
              <Post
                post={post}
                linkAuthor={linkAuthor}
                author={userOfPost as UserType}
              />
            }
          </Fragment>
        );
      })}
    </div>
  );
};

export default PostList;
