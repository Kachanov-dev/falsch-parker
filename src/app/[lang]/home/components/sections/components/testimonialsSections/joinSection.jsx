import React from 'react';
import { PayFineButton } from '@/components/buttons/payFineButton';
import { ArrowDotButton } from '@/components/buttons/arrowDotButton';

export const JoinSection = () => {
  return (
    <div className='flex h-[1100px] w-full flex-col items-center'>
      <div className='max-md:-[580px] flex w-full flex-col justify-between rounded-card bg-green p-20 text-white max-sm:p-6 md:h-[760px]'>
        <div className='flex w-full max-md:flex-col'>
          <div className='flex justify-between max-md:w-full  md:w-1/2'>
            <div className='flex flex-col '>
              <span>Schützengasse 4</span>
              <span>8001 Zurich</span>
              <span>Switzerland</span>
            </div>
            <div className='flex flex-col'>
              <span>Schützengasse 4</span>
              <span>8001 Zurich</span>
              <span>Switzerland</span>
            </div>
          </div>
          <div className='w-1/2 max-md:w-full md:w-1/2 '>
            <div className='max-md:pt-6 md:text-right'>+41 44 123 45 67</div>
          </div>
        </div>

        <div className='flex items-center max-md:flex-col'>
          <div className='text-[240px] max-md:text-[144px]'>Join</div>
          <div className='flex h-full w-full items-end justify-end'>
            <ArrowDotButton theme='light'>Contact us</ArrowDotButton>
          </div>
        </div>
      </div>
      <div className='mt-20 flex h-[250px] w-full max-w-[450px] flex-col content-between items-center justify-between rounded-card bg-white p-[60px]'>
        <span className='text-3xl text-dark'>I got a parking fine</span>
        <PayFineButton text='Pay fine' />
      </div>
    </div>
  );
};
