'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import MobileParkingCar from '@/images/home-page/mobil-parking-car.png';
import { ArrowRightShapeButton } from '@/components/buttons/shapeButtons/arrowRightShapeButton';
import { CrossShapeButton } from '@/components/buttons/shapeButtons/crossShapeButton';
import { ArrowLeftShapeButton } from '@/components/buttons/shapeButtons/arrowLeftShapeButton';

const RenderButtons = ({ setScreen, isTwoScreen }) => {
  const goTo = () => {};
  return (
    <div className='relative'>
      <div className='block max-md:hidden'>
        <ArrowRightShapeButton
          className={'bg-[white]'}
          isLightTheme
          onClick={goTo()}
        />
      </div>
      <div className='hidden max-md:block'>
        {isTwoScreen ? (
          <ArrowLeftShapeButton
            className={'bg-[white]'}
            isLightTheme
            onClick={() => setScreen(false)}
          />
        ) : (
          <CrossShapeButton
            className={'bg-[white]'}
            isLightTheme
            onClick={() => setScreen(true)}
          />
        )}
      </div>
    </div>
  );
};
export const HowItWorksSection = () => {
  const [isTwoScreen, setIsTwoScreen] = useState(false);
  const setScreen = (value) => {
    setIsTwoScreen(value);
  };
  return (
    <div className='relative overflow-hidden'>
      <h1 className='mb-[80px] mt-[170px] p-0 text-8xl text-dark max-md:mb-[40px] max-md:text-4xl'>
        See how <br /> it works.
      </h1>

      <div className='relative mb-10 mt-5 hidden h-[760px] rounded-card bg-white max-md:h-[580px] md:flex'>
        <div className='relative h-full w-1/2 max-md:w-full max-md:pl-0'>
          <Image
            src={MobileParkingCar}
            fill
            alt='No Parking'
            className='ml-[16%] mt-[10%] object-contain max-md:ml-[18%] max-md:mt-[5%]'
          />
        </div>
        <div className='flex h-[760px] w-1/2 items-center justify-center max-md:hidden'>
          <div className='max-w-[530px] px-5'>
            <div className='flex flex-col justify-between py-5 text-2xl text-dark'>
              <span className='pb-9 text-7xl'>Tow away.</span>
              <span className='text-xl'>
                To ensure legal certainty, take a clear photo of the illegally
                parked vehicle with its license plate visible. Remember, a court
                prohibition notice is required for compensation claims.
              </span>
            </div>
          </div>
        </div>

        <RenderButtons setScreen={setScreen} isTwoScreen={isTwoScreen} />
      </div>

      <div className='relative mb-10 mt-5 hidden h-[760px] rounded-card bg-white max-md:flex max-md:h-[580px] lg:hidden'>
        {isTwoScreen ? (
          <div className='flex h-[760px] w-1/2 items-center justify-center max-md:h-[580px] max-md:w-full'>
            <div className='max-w-[530px] px-5'>
              <div className='flex flex-col justify-between py-5 text-2xl text-dark'>
                <span className='pb-9 text-7xl max-md:text-4xl'>Tow away.</span>
                <span className='text-xl'>
                  To ensure legal certainty, take a clear photo of the illegally
                  parked vehicle with its license plate visible. Remember, a
                  court prohibition notice is required for compensation claims.
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className='relative h-full w-full max-md:h-[580px] max-md:w-full max-md:pl-0'>
            <Image
              src={MobileParkingCar}
              fill
              alt='No Parking'
              className='ml-[16%] mt-[10%] object-contain max-md:ml-[16%] max-md:mt-[5%]'
            />
          </div>
        )}
        <RenderButtons setScreen={setScreen} isTwoScreen={isTwoScreen} />
      </div>
    </div>
  );
};
