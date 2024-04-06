'use client';

import React from 'react';
import Image from 'next/image';
import FuelFraud from '@/images/home-page/product/fuel-fraud..png';
import ParkingFines from '@/images/home-page/product/parking-fines.png';
import RequestTruck from '@/images/home-page/product/request-truck.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowDown } from '@/components/icons/arrowDown';
import cl from 'classnames';

export const ProductCard = ({ title, subtitle, type, className }) => {
  let src = null;
  let alt = '';

  switch (type) {
    case 'fuelFraud':
      src = FuelFraud;
      alt = 'Fuel Fraud';
      break;
    case 'parkingFines':
      src = ParkingFines;
      alt = 'Parking Fines';
      break;
    case 'requestTruck':
      src = RequestTruck;
      alt = 'Request Truck';
      break;
  }

  return (
    <div className='rounded-br-0 h-[680px] w-[440px] cursor-pointer overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-md:h-[580px] max-md:w-[328px]'>
      <div className='group relative h-[680px] w-[440px] transform rounded-card  grayscale transition duration-500 ease-in-out hover:grayscale-0 max-md:h-[580px] max-md:w-[328px]'>
        <div className='absolute z-[2] p-10 text-5xl text-white max-md:text-4xl'>
          {title}
        </div>
        <div className='relative h-[680px] w-[440px] '>
          <Image
            src={src}
            className='object-cover duration-500 ease-in-out group-hover:scale-105'
            fill
            alt={alt}
          />
        </div>
        <div className='absolute bottom-0 z-[2] p-10 pr-14 text-lg text-white/50 transition duration-500 ease-in-out group-hover:text-white max-md:text-base'>
          {subtitle}
        </div>
        <CornerButtonContainer>
          <RoundButton
            icon={ArrowDown}
            animation='group-hover:scale-125'
            className={cl(className, 'text-white')}
          />
        </CornerButtonContainer>
      </div>
    </div>
  );
};
