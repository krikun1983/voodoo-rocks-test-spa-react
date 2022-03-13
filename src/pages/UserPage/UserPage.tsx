import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import apiService from 'api/ServiceApi';
import {PostType, UserFullType} from 'api/types';
import PostList from 'components/PostList';
import {MyButton} from 'UI';
import style from './UserPage.module.scss';

const UserPage: React.FC = () => {
  const {id} = useParams();
  const navigation = useNavigate();
  const [userInfo, setUserInfo] = useState({} as UserFullType);
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    (async () => {
      const user = await apiService.getUserById(+(id as string));
      const postsByUserId = await apiService.getPostAllByUserId(
        +(id as string),
      );
      setUserInfo(user);
      setPosts(postsByUserId);
    })();
  }, []);

  return (
    <>
      <div className={style.author}>
        <div className={style.author__info}>Author info:</div>
        <h1 className={style.author__name}>{userInfo.name}</h1>
        <div className={style.author__card}>
          <h3>
            <span>Nickname: </span>
            {userInfo.username}
          </h3>
          <p>
            <span>Email: </span>
            {userInfo.email}
          </p>
          <p>
            <span>Website: </span>
            {userInfo.website}
          </p>
          <p>
            <span>Company: </span>
            {userInfo.company?.name}
          </p>
          <p>
            <span>City: </span>
            {userInfo.address?.city}
          </p>
        </div>
        <div className={style.author__link}>
          <MyButton onClick={() => navigation(-1)}>Go Back</MyButton>
        </div>
      </div>
      <div>{<PostList posts={posts} linkAuthor={false} />}</div>
    </>
  );
};

export default UserPage;
