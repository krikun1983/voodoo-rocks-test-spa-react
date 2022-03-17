import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import img_404 from 'assets/img/404.webp';
import './NotFoundPage.scss';

const NotFoundPage: React.FC = () => {
  const location = useLocation();
  const navigation = useNavigate();
  return (
    <section className="loader d-flex flex-column align-items-center">
      <h2>Not Found Page</h2>
      <p>
        Path <span>{location.pathname}</span> does not exist
      </p>
      <img src={img_404} alt="404 - page not found" />
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => navigation(-1)}
      >
        Go Back
      </button>
    </section>
  );
};

export default NotFoundPage;
