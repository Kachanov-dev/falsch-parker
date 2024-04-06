import React from 'react';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowRight } from '@/components/icons/arrowRight';
import Image from 'next/image';
import TowingCar from '@/images/towing-service/towing-car.png';
import Play from '@/images/towing-service/play.svg';

const Content = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='h-card max-md:h-cardMobile relative col-span-2 overflow-hidden'>
        <div className='flex h-full w-full overflow-hidden rounded-[40px] bg-white max-lg:rounded-card '>
          <div className='flex flex-1 flex-col justify-center p-20 pr-10 max-lg:hidden'>
            <h1 className='mb-10 text-7xl'>Our services.</h1>
            <p>
              We offer our customers in Zurich a comprehensive towing service
              and compensation for illegal parking on private property. Our team
              of experienced towing specialists is equipped with the latest
              equipment to remove illegally parked vehicles quickly and
              safely. We work closely with our customers to ensure that their
              parking spaces are always accessible and that they do not have to
              tolerate unauthorized parking visitors.
            </p>
          </div>
          <div className='relative flex-1 shrink-0 pt-20'>
            <Image
              src={TowingCar}
              fill
              alt='Towing car'
              className='ml-10 mt-20 object-cover object-bottom '
            />
          </div>
        </div>
        <CornerButtonContainer>
          <RoundButton
            icon={ArrowRight}
            theme='light'
            animation='group-hover:-rotate-45 group-hover:scale-125'
          />
        </CornerButtonContainer>
      </div>
      <div className='h-card max-md:h-cardMobile flex-1 max-lg:col-span-2'>
        <div className='flex h-full flex-col justify-between overflow-hidden rounded-[40px] bg-white p-12 max-lg:rounded-card max-md:p-6'>
          <div className='relative mb-12 h-[172px] w-[156px] self-center'>
            <Image src={Play} alt='Play' fill className='' />
          </div>
          <div className='text-2xl max-md:text-sm'>
            <h6 className='mb-10 text-dark/50'>Our approach</h6>
            <p className=''>
              Our towing service in Zurich is fast and efficient. As soon as we
              are notified by a customer via the APP that there is a parking
              problem, we immediately move out to remove the vehicle. We work
              closely with local authorities to ensure we comply with all
              necessary permits and requirements. Our towing specialists are
              trained to assess the proportionality of towing and to ensure that
              all legal bases are adhered to.
            </p>
          </div>
        </div>
      </div>
      <div className='h-card max-md:h-cardMobile relative flex-1 max-lg:col-span-2'>
        <div className='h-full overflow-hidden rounded-[40px] bg-white max-lg:rounded-card'></div>
        <CornerButtonContainer>
          <RoundButton
            icon={ArrowRight}
            className='bg-[#63B2B3] text-light'
            animation='group-hover:-rotate-45 group-hover:scale-125'
          />
        </CornerButtonContainer>
      </div>
      <div className='h-card max-md:h-cardMobile relative col-span-2 overflow-hidden'>
        <div className='h-full overflow-hidden rounded-[40px] bg-dark max-lg:rounded-card'></div>
        <CornerButtonContainer>
          <RoundButton
            icon={ArrowRight}
            theme='dark'
            animation='group-hover:-rotate-45 group-hover:scale-125'
          />
        </CornerButtonContainer>
      </div>
    </div>
  );
};

export { Content };
