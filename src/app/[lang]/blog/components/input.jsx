import React from 'react';
import { Dot } from '@/components/icons/dot';
import { ArrowRight } from '@/components/icons/arrowRight';

const Input = ({ placeholder }) => {
  return (
    <form className='flex h-[51px] w-[352px] overflow-hidden rounded-full border border-dark'>
      <input
        className='h-full w-full bg-light px-6 text-base focus:outline-0'
        placeholder={placeholder}
      />
      <button className='group relative flex h-full min-w-[140px] items-center justify-center overflow-hidden rounded-full bg-dark font-light text-light transition-colors duration-300 hover:bg-light'>
        <div className='flex items-center'>
          <ArrowRight className='absolute left-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-4 group-hover:text-black' />
          <span className='transition-all duration-300 group-hover:translate-x-5 group-hover:text-black'>
            Subscribe
          </span>
        </div>
        <Dot className='ml-4 transition-transform duration-300 group-hover:scale-0' />
      </button>
    </form>
  );
};

export { Input };
