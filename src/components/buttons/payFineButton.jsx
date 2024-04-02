import React from 'react';
import { ArrowRight } from '@/components/icons/arrowRight';
import { Dot } from '@/components/icons/dot';
import cl from 'classnames';

export const PayFineButton = ({ text, width = '140px', height = '51px' }) => {
  const buttonStyle = { width, height }; // Стиль кнопки
  const buttonClass = cl(
    'group relative flex items-center justify-center overflow-hidden rounded-full bg-green font-light text-light transition-colors duration-300 hover:bg-black'
  );

  return (
    <button className={buttonClass} style={buttonStyle}>
      <div className='flex items-center'>
        <ArrowRight className='absolute left-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-4 group-hover:text-white' />
        <span className='transition-all duration-300 group-hover:translate-x-5 group-hover:text-white'>
          {text}
        </span>
      </div>
      <Dot className='ml-4 transition-transform duration-300 group-hover:scale-0' />
    </button>
  );
};
