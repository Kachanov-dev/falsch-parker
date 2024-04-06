import React from 'react';
import { Container } from '@/components/container/container';
import { FaqSection } from '@/components/faq/faqSection';
import { LargeImageWithDesc } from '@/components/largeImageWithDesc/largeImageWithDesc';
import MobileParkingCar from '@/images/home-page/mobil-parking-car.png';

const FuelFraudPage = () => {
  return (
    <Container>
      <LargeImageWithDesc
        image={MobileParkingCar}
        mobileClassesImg='ml-[16%] mt-[10%] object-contain max-md:ml-[16%] max-md:mt-[5%]'
        desktopClassesImg='ml-[16%] mt-[10%] object-contain max-md:ml-[18%] max-md:mt-[5%]'
        descDesktop={
          <div className='flex flex-col justify-between py-5 text-2xl text-dark'>
            <span className='pb-9 text-7xl'>Tow away.</span>
            <span className='text-xl'>
              To ensure legal certainty, take a clear photo of the illegally
              parked vehicle with its license plate visible. Remember, a court
              prohibition notice is required for compensation claims.
            </span>
          </div>
        }
        descMobile={
          <div className='flex flex-col justify-between py-5 text-2xl text-dark'>
            <span className='pb-9 text-7xl max-md:text-4xl'>Tow away.</span>
            <span className='text-xl'>
              To ensure legal certainty, take a clear photo of the illegally
              parked vehicle with its license plate visible. Remember, a court
              prohibition notice is required for compensation claims.
            </span>
          </div>
        }
      />
      <FaqSection />
    </Container>
  );
};

export default FuelFraudPage;
