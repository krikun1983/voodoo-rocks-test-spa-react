import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import img_404 from 'assets/img/404.webp';
import style from './NotFoundPage.module.scss';
import {MyButton} from 'UI';

const NotFoundPage: React.FC = () => {
  const location = useLocation();
  const navigation = useNavigate();
  return (
    <section className={style.wrapper}>
      <h2>Not Found Page</h2>
      <p>
        Path <span>{location.pathname}</span> does not exist
      </p>
      <img src={img_404} alt="404 - page not found" />
      <MyButton onClick={() => navigation(-1)}>Go Back</MyButton>
    </section>
  );
};

export default NotFoundPage;
