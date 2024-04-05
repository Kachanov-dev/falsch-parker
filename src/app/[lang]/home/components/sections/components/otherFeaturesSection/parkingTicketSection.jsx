import React from 'react';
import Image from 'next/image';
import ParkingTicket from '@/images/home-page/parkingTicket.png';
import WhiteLabelSolution from '@/images/home-page/white-label-solution.png';
import { CrossShapeButton } from '@/components/buttons/shapeButtons/crossShapeButton';
import { ArrowRightShapeButton } from '@/components/buttons/shapeButtons/arrowRightShapeButton';

export const ParkingTicketSection = () => {
  return (
    <div className='flex h-full w-full gap-5 max-sm:flex-col'>
      <div className='relative h-[730px] w-1/2 overflow-hidden rounded-bl-card rounded-tl-card  rounded-tr-card max-lg:h-[440px] max-sm:w-full'>
        <div className='absolute z-[2] p-[80px] text-7xl text-dark max-lg:p-10 max-lg:text-4xl'>
          <span>White label solution.</span>
        </div>
        <Image
          src={WhiteLabelSolution}
          fill
          alt='White label solution'
          className='object-cover'
        />
        <CrossShapeButton
          className='bg-white'
          onClick={() => {}}
          isLightTheme
        />
      </div>
      <div className='relative h-[730px] w-1/2 overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-lg:h-[440px] max-sm:w-full'>
        <div className='absolute z-[2] p-20 text-7xl text-dark max-lg:p-10 max-lg:text-4xl'>
          <span>Parking ticket.</span>
        </div>
        <Image
          src={ParkingTicket}
          fill
          alt='Parking tocket'
          className='object-cover'
        />
        <ArrowRightShapeButton
          className='bg-white'
          onClick={() => {}}
          isLightTheme
        />
      </div>
    </div>
  );
};
