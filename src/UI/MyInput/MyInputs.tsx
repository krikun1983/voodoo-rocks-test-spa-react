import React from 'react';
import style from './MyInput.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.MutableRefObject<HTMLInputElement>;
}

const MyInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input ref={ref} {...props} className={style.default} />;
});

MyInput.displayName = 'UI-Input';

export default MyInput;
