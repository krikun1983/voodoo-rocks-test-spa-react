import React from 'react';
import style from './MyButton.module.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const MyButton: React.FC<ButtonProps> = ({children, ...props}) => {
  return (
    <button {...props} className={style.btn}>
      {children}
    </button>
  );
};

export default MyButton;
