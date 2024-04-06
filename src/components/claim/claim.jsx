import React from 'react';
import Image from 'next/image';
import { OpenAppButton } from '@/components/buttons/openAppButton';
import ClaimImage from '@/images/global/claim.png';

export const Claim = () => {
  return (
    <div className='relative h-[700px] w-full overflow-hidden rounded-card max-md:h-[580px]'>
      <div className='absolute left-0 z-[1] h-full p-16 max-sm:p-8'>
        <div className='flex h-full w-full items-center'>
          <div className='flex h-full max-h-[355px] w-full max-w-[500px] flex-col justify-between text-white '>
            <h4 className='text-7xl max-md:text-6xl'>Claim.</h4>
            <span className='text-xl max-md:text-base'>
              As a property owner or tenant, you have the right to claim
              compensation for illegal parking. Falsch-Parker.ch offers the
              necessary infrastructure and handles the entire processing for
              you.
            </span>
            <OpenAppButton />
          </div>
        </div>
      </div>
      <Image
        src={ClaimImage}
        fill
        className='object-cover object-center max-md:object-left'
        alt='No Parking'
      />
    </div>
  );
};
