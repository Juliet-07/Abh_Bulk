import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
    className={`absolute right-[-10px] top-2 bg-white border-[1px] border-[red]
    py-[15px] px-[5px] cursor-pointer active:opacity-5 flex items-center justify-center z-[20000]`}
    style={{  display: 'block', background: 'white', 
    width: 20, height: 40, borderRadius: 2,  }}
    onClick={onClick}
  > <ChevronRightIcon width={10} height={10} color='red' /></div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute left-[-30px] top-2 bg-white border-[1px] border-[red]
       py-[15px] px-[5px] cursor-pointer active:opacity-5 flex items-center justify-center z-[20000]`}
      style={{  display: 'block', background: 'white', 
      width: 20, height: 40, borderRadius: 2,  }}
      onClick={onClick}
    > <ChevronLeftIcon width={10} height={10} color='red' /></div>
  );
};

export { NextArrow, PrevArrow };
