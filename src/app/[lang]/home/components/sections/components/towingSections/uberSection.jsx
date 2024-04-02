import React, { useState } from 'react';
import Image from 'next/image';
import UberTowing1 from '@/images/home-page/uber-towing-1.png';
import UberTowing2 from '@/images/home-page/uber-towing-2.png';
import { CrossShapeButton } from '@/components/buttons/shapeButtons/crossShapeButton';
import { ArrowRightShapeButton } from '@/components/buttons/shapeButtons/arrowRightShapeButton';

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
            <div className='relative h-full w-1/2'>
              <Image
                src={UberTowing2}
                fill
                className='object-cover object-bottom max-lg:object-right'
                alt='No Parking'
              />
            </div>
            <div className='right-0 z-[1] flex h-full w-1/2 flex-col justify-center text-2xl text-white'>
              <div className='flex max-w-[650px] flex-col p-5'>
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

        {isFirstScreen ? (
          <CrossShapeButton
            className='bg-dark'
            onClick={() => setIsFirstScreen(false)}
          />
        ) : (
          <div className='relative z-[1]'>
            <ArrowRightShapeButton
              className='bg-dark'
              onClick={() => setIsFirstScreen(true)}
            />
          </div>
        )}
      </div>
    </>
  );
};
