import React from 'react';
import Image from 'next/image';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowRight } from '@/components/icons/arrowRight';
import Play from '@/images/towing-service/play.svg';
import Shield from '@/images/towing-service/shield.svg';
import { OurServices } from '@/app/[lang]/location/zurich/components/ourServices';

const Content = () => {
  return (
    <>
      <OurServices />
      <div className='grid grid-cols-2 gap-4'>
        <div className='h-card flex-1 max-lg:col-span-2 max-md:h-cardMobile'>
          <div className='flex h-full flex-col justify-between overflow-hidden rounded-[40px] bg-white p-12 !pt-0 max-lg:rounded-card max-md:p-6'>
            <div className='relative my-auto h-[172px] w-[156px] shrink-0 self-center'>
              <Image src={Play} alt='Play' fill />
            </div>
            <div className='text-xl max-2xl:text-xl max-xl:text-lg max-lg:text-2xl max-md:text-xl max-sm:text-lg max-[550px]:text-base max-[420px]:text-sm'>
              <h6 className='mb-6 text-dark/50'>Our approach</h6>
              <p>
                Our towing service in Zurich is fast and efficient. As soon as
                we are notified by a customer via the APP that there is a
                parking problem, we immediately move out to remove the vehicle.
                We work closely with local authorities to ensure we comply with
                all necessary permits and requirements. Our towing specialists
                are trained to assess the proportionality of towing and to
                ensure that all legal bases are adhered to.
              </p>
            </div>
          </div>
        </div>
        <div className='relative h-card flex-1 max-lg:col-span-2 max-md:h-cardMobile'>
          <div className='flex h-full flex-col justify-between overflow-hidden rounded-[40px] bg-white bg-greenGradient p-12 !pb-0 max-lg:rounded-card max-md:p-6'>
            <div className='text-xl text-white max-2xl:text-xl max-xl:text-lg max-lg:text-2xl max-md:text-xl max-sm:text-lg max-[550px]:text-base max-[420px]:text-sm'>
              <h6 className='mb-6 opacity-50'>Our service promise</h6>
              <p>
                As a towing company in Zurich, we pride ourselves on providing
                our customers with a fast, reliable and professional service. We
                understand how frustrating it can be when someone parking
                illegally parks in your private parking space and you do not
                have access to your own parking space. That's why we work hard
                to ensure that our customers always have access to their parking
                spaces and that any illegal parking is removed quickly and
                safely.
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
        <div className='relative col-span-2 h-card overflow-hidden max-md:h-cardMobile'>
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
    </>
  );
};

export { Content };
