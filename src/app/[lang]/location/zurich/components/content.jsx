import React from 'react';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowRight } from '@/components/icons/arrowRight';
import Image from 'next/image';
import TowingCar from '@/images/towing-service/towing-car.png';
import Play from '@/images/towing-service/play.svg';
import Shield from '@/images/towing-service/shield.svg';

const Content = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='h-card max-md:h-cardMobile relative col-span-2 overflow-hidden'>
        <div className='flex h-full w-full overflow-hidden rounded-[40px] bg-white max-lg:rounded-card '>
          <div className='flex flex-1 flex-col justify-center p-20 pr-10 max-lg:hidden'>
            <h1 className='mb-10 text-7xl'>Our services.</h1>
            <p>
              We offer our customers in Zurich a comprehensive towing service
              and compensation for illegal parking on private property. Our team
              of experienced towing specialists is equipped with the latest
              equipment to remove illegally parked vehicles quickly and safely.
              We work closely with our customers to ensure that their parking
              spaces are always accessible and that they do not have to tolerate
              unauthorized parking visitors.
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
        <div className='flex h-full flex-col justify-between overflow-hidden rounded-[40px] bg-white p-12 !pt-0 max-lg:rounded-card max-md:p-6'>
          <div className='relative my-auto h-[172px] w-[156px] shrink-0 self-center'>
            <Image src={Play} alt='Play' fill />
          </div>
          <div className='text-xl max-2xl:text-xl max-xl:text-lg max-lg:text-2xl max-md:text-xl max-sm:text-lg max-[550px]:text-base max-[420px]:text-sm'>
            <h6 className='mb-6 text-dark/50'>Our approach</h6>
            <p>
              Our towing service in Zurich is fast and efficient. As soon as we
              are notified by a customer via the APP that there is a parking
              problem, we immediately move out to remove the vehicle. We work
              closely with local authorities to ensure we comply with all
              necessary permits and requirements. Our towing specialists are
              trained to assess the proportionality of towing and to ensure that
              all legal bases are adhered to.
            </p>
          </div>
        </div>
      </div>
      <div className='h-card max-md:h-cardMobile relative flex-1 max-lg:col-span-2'>
        <div className='bg-greenGradient flex h-full flex-col justify-between overflow-hidden rounded-[40px] bg-white p-12 !pb-0 max-lg:rounded-card max-md:p-6'>
          <div className='text-xl text-white max-2xl:text-xl max-xl:text-lg max-lg:text-2xl max-md:text-xl max-sm:text-lg max-[550px]:text-base max-[420px]:text-sm'>
            <h6 className='mb-6 opacity-50'>Our service promise</h6>
            <p>
              As a towing company in Zurich, we pride ourselves on providing our
              customers with a fast, reliable and professional service. We
              understand how frustrating it can be when someone parking
              illegally parks in your private parking space and you do not have
              access to your own parking space. That's why we work hard to
              ensure that our customers always have access to their parking
              spaces and that any illegal parking is removed quickly and safely.
            </p>
          </div>
          <div className='relative my-auto flex h-[172px] w-[154px] shrink-0 self-center'>
            <Image fill src={Shield} alt='shield' />
          </div>
        </div>
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
