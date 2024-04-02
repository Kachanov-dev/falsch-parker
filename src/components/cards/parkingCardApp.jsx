import React from 'react';
import Image from 'next/image';
import MobileLogo from '@/images/home-page/mobile-logo.png';
import { ArrowRightShapeButton } from '@/components/buttons/shapeButtons/arrowRightShapeButton';

export const ParkingCardApp = ({ text, onClick }) => {
  return (
    <div className='relative flex h-[205px] w-[250px] flex-col content-between justify-between rounded-card bg-black p-4 max-lg:w-[340px]'>
      <span className='mt-4'>{text}</span>
      <Image
        src={MobileLogo}
        width={50}
        height={50}
        className='rounded-[18px]'
        alt='Mobile Falsch-parker logo'
      />
      <ArrowRightShapeButton className={'bg-[#0D0F11]'} onClick={onClick} />
    </div>
  );
};
