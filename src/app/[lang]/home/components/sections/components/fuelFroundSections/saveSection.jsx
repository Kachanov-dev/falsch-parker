import React from 'react';
import Image from 'next/image';
import LineSaveMoney from '@/images/home-page/lineSaveMoney.png';
import LineSaveTime from '@/images/home-page/lineSaveTime.png';
import { ArrowRightShapeButton } from '@/components/buttons/shapeButtons/arrowRightShapeButton';

export const SaveSection = () => {
  const goTo = () => {};

  return (
    <div className='relative my-10 flex gap-5 text-dark max-md:flex-col lg:text-5xl xl:text-7xl'>
      <div className='relative h-full w-1/2 overflow-hidden rounded-card'>
        <div className='absolute w-full p-[60px] text-center'>
          <span>Save time </span>
          <span className='text-dark/50'>by avoiding gas station hassles.</span>
        </div>
        <Image src={LineSaveTime} alt='Save time' className='object-cover' />
      </div>
      <div className='relative h-full w-1/2 overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card'>
        <div className='absolute bottom-20 w-full p-[60px] text-center'>
          <span>Save money </span>
          <span className='text-dark/50'>
            by minimizing losses from fuel fraud.
          </span>
        </div>
        <div className='absolute bottom-[15px] right-[80px] text-base'>
          Contact us
        </div>
        <Image src={LineSaveMoney} alt='Save money' className='object-cover' />
        <ArrowRightShapeButton
          className={'bg-[#fffff]'}
          onClick={goTo}
          isLightTheme
        />
      </div>
    </div>
  );
};
