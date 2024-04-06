'use client';

import React from 'react';
import Image from 'next/image';
import WrongBusinessParking from '@/images/global/wrong-business-parking.png';
import WrongPrivateParking from '@/images/global/wrong-private-parking.png';
import { ArrowRightShapeButton } from '@/components/buttons/shapeButtons/arrowRightShapeButton';

const Render = () => {
  return (
    <div className='relative flex h-[250px] w-1/2 rounded-card bg-white p-4 max-lg:w-full'>
      <div className='relative h-full w-[250px]'>
        <Image
          src={WrongBusinessParking}
          alt='Our service'
          className='rounded-card object-cover'
          fill
        />
      </div>
      <div className=' p-10'>
        <span className='text-4xl'>
          <span className='text-dark/50'>Wrong parkers on your</span> business
          parking?
        </span>
      </div>
      <ArrowRightShapeButton
        className={'bg-[white]'}
        isLightTheme
        onClick={() => {}}
      />
    </div>
  );
};

export const WrongParkers = () => {
  return (
    <div className='flex h-full w-full gap-5 max-lg:flex-col'>
      {Render()}
      {Render()}
    </div>
  );
};
