import React from 'react';

const debounce = (
  callback: (e: React.ChangeEvent<HTMLInputElement>) => void,
  ms: number,
) => {
  let timer: NodeJS.Timeout;
  return (...args: React.ChangeEvent<HTMLInputElement>[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(args[0]);
    }, ms);
  };
};

export default debounce;
