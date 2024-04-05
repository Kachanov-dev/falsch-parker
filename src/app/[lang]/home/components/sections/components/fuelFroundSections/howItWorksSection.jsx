import React from 'react';
import Image from 'next/image';
import MobileFuelReport from '@/images/home-page/mobile-fuel-report.png';
import { SeeHowItWorks } from '@/components/seeHowItWorks/seeHowItWorks';

export const HowItWorksSection = () => {
  return (
    <div className='relative '>
      <SeeHowItWorks />
      <div className='flex w-full rounded-card bg-dark max-md:h-[580px] max-md:flex-col md:h-[700px]'>
        <div className='relative h-full max-md:w-full md:w-1/2 '>
          <Image
            src={MobileFuelReport}
            fill
            alt='Report'
            className='object-contain object-center py-12'
          />
        </div>
        <div className='flex h-full w-1/2 items-center max-md:w-full md:w-1/2'>
          <div className='max-w-[480px] text-white '>
            <div className='pb-9 text-7xl'>
              Reduce <br /> fuel theft.
            </div>
            <div className='text-xl'>
              To ensure legal certainty, take a clear photo of the illegally
              parked vehicle with its license plate visible. Remember, a court
              prohibition notice is required for compensation claims.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
