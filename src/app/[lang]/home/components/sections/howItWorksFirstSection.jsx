'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/container/container';
import MobileParkingCar from '@/images/home-page/mobil-parking-car.png';
import { ArrowRightShapeButton } from '@/components/buttons/shapeButtons/arrowRightShapeButton';
import { Claim } from '@/components/claim/claim';
import { ShapeHeaderButtons } from '@/components/buttons/shapeButtons/shapeHeaderButtons';

export const HowItWorksFirstSection = () => {
  const router = useRouter();

  const goToParkingTicket = () => {
    router.push('/parking-ticket');
  };

  return (
    <Container>
      <div className='h-full w-full overflow-hidden'>
        <h1 className='mb-[80px] mt-[170px] p-0 text-8xl text-dark'>
          See how <br /> it works. test
        </h1>
        <div>
          <div className='relative mb-10 mt-5 flex h-[760px] rounded-card bg-white max-md:flex-col'>
            <div className='absolute flex w-full justify-end bg-white'>
              <div className='relative flex h-[80px] w-[340px] content-end justify-end rounded-bl-card bg-light'>
                <div className='relative h-[70px] w-[330px] rounded-card'>
                  <ShapeHeaderButtons />
                </div>
              </div>
            </div>

            <div className='relative h-full w-1/2 max-md:w-full max-md:pl-0'>
              <Image
                src={MobileParkingCar}
                fill
                alt='No Parking'
                className='ml-[16%] mt-[10%] object-contain max-md:ml-[10%] max-md:mt-[5%]'
              />
            </div>
            <div className='flex h-[760px] w-1/2 items-center justify-center max-md:w-full'>
              <div className='max-w-[530px] px-5'>
                <div className='flex justify-between py-5 text-2xl'>
                  <span className='text-dark'>
                    Take a picture of wrong parker.{' '}
                  </span>
                  <span className='ml-5 text-dark/50'>01</span>
                </div>
                <div className='flex items-center justify-between border-y-[1px] border-dark/10 py-5 text-2xl'>
                  <span className='text-dark'>
                    Check that illegal parking situation is well documented.
                  </span>
                  <span className='ml-5 text-dark/50'>02</span>
                </div>
                <div className='flex  justify-between py-5 text-2xl'>
                  <span className='text-dark'>Confirm the location.</span>
                  <span className='ml-5 text-dark/50'>03</span>
                </div>
              </div>
            </div>
            <ArrowRightShapeButton
              className={'bg-[white]'}
              isLightTheme
              onClick={goToParkingTicket}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
