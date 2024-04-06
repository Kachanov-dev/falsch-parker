import React, { useState } from 'react';
import Image from 'next/image';
import UberTowing1 from '@/images/home-page/uber-towing-1.png';
import UberTowing2 from '@/images/home-page/uber-towing-2.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { Cross } from '@/components/icons/cross';
import { ArrowLeft } from '@/components/icons/arrowLeft';

export const UberSection = () => {
  const [isFirstScreen, setIsFirstScreen] = useState(true);
  return (
    <>
      <div className='relative mt-[170px] h-[700px] w-full overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-md:h-[580px]'>
        {isFirstScreen ? (
          <div className='relative h-full w-full'>
            <div className='absolute z-[1] flex flex-col p-[100px] text-8xl text-white max-md:p-10 max-md:text-2xl'>
              <span className='text-white'>
                Uber <br />
                <span className='text-white/50'>for towing.</span>
              </span>
              <span className='mt-12 text-xl max-md:text-base'>
                Our app requires only 2 minutes of processing time.
              </span>
            </div>
            <Image
              src={UberTowing1}
              fill
              alt='No Parking'
              className='object-cover object-bottom'
            />
          </div>
        ) : (
          <div className='relative flex h-full w-full bg-dark'>
            <div className='relative flex h-full items-center justify-center max-lg:w-1/2 max-md:hidden md:visible lg:w-[40%]'>
              <div className='relative flex h-full w-full max-lg:top-[150px] lg:top-[200px]'>
                <Image
                  src={UberTowing2}
                  className='object-contain'
                  alt='No Parking'
                />
              </div>
            </div>
            <div className='right-0 z-[1] flex h-full flex-col justify-center text-2xl text-white max-lg:w-1/2 max-md:w-full max-md:text-lg lg:w-[60%]'>
              <div className='flex flex-col p-5 max-md:w-full lg:max-w-[700px]'>
                <span className='py-5 text-white/50'>
                  Easy to use app to fine wrong parkers.
                </span>
                <span>
                  On your business and private parkings you’re allowed to fine
                  wrong parkers. Our app provides you with the infrastructure to
                  execute parking fines with few clicks. Our app is fully
                  automized and we take care of everything what happens after
                  you create the fine.
                </span>
              </div>
            </div>
          </div>
        )}
        <CornerButtonContainer>
          <RoundButton
            icon={isFirstScreen ? Cross : ArrowLeft}
            onClick={() => setIsFirstScreen((prev) => !prev)}
            theme='dark'
            className='relative z-[1]'
            animation='group-hover:scale-125'
          />
        </CornerButtonContainer>
      </div>
    </>
  );
};
