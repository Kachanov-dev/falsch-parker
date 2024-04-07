'use client';

import React from 'react';
import Image from 'next/image';
import ParkingManagementBg from '@/images/app-page/parking-management.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { Cross } from '@/components/icons/cross';

export const ParkingManagement = () => {
  return (
    <div className='relative h-[700px] w-full overflow-hidden  max-md:h-[580px]'>
      <div className='relative h-full w-full overflow-hidden rounded-card'>
        <div className='absolute left-0 z-[1] h-full p-16 max-sm:p-8'>
          <div className='flex h-full max-h-[355px] w-full max-w-[700px] flex-col text-white'>
            <span className='self-start rounded-full bg-white/10 p-4'>
              Parking management
            </span>
            <h4 className='mt-6 text-7xl text-white max-md:text-5xl max-sm:text-3xl'>
              <span className='text-white/50'>Simplify your parking with</span>{' '}
              automatic parking management.
            </h4>
          </div>
        </div>
        <Image
          src={ParkingManagementBg}
          fill
          className='object-cover object-center'
          alt='No Parking'
        />
      </div>

      <CornerButtonContainer>
        <RoundButton
          icon={Cross}
          onClick={() => {}}
          className='relative z-[2] bg-[#99BFCC] text-white'
          animation='group-hover:scale-105 group-hover:-rotate-45'
        />
      </CornerButtonContainer>
    </div>
  );
};
