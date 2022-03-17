import React, {useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {UserType} from 'api/types';
import {ContextAPI} from 'context/contextAPI';
import PostList from 'components/PostList';
import './UserPage.scss';

const UserPage: React.FC = () => {
  const {id} = useParams();
  const navigation = useNavigate();
  const context = useContext(ContextAPI);

  const userInfo = context.usersApi.find(user => user.id === +(id as string));
  const posts = context.postsApi.filter(post => post.userId === userInfo?.id);

  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="author">
          <div className="author__info">Author info:</div>
          <h1 className="author__name">{userInfo?.name}</h1>
          <div className="author__card">
            <h3>
              <span>Nickname: </span>
              {userInfo?.username}
            </h3>
            <p>
              <span>Email: </span>
              {userInfo?.email}
            </p>
            <p>
              <span>Website: </span>
              {userInfo?.website}
            </p>
            <p>
              <span>Company: </span>
              {userInfo?.company?.name}
            </p>
            <p>
              <span>City: </span>
              {userInfo?.address?.city}
            </p>
          </div>
          <div className="author__link">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => navigation(-1)}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        {
          <PostList
            posts={posts}
            users={[userInfo as UserType]}
            linkAuthor={false}
          />
        }
      </div>
    </>
  );
};

export default UserPage;
