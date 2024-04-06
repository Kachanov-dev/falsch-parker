'use client';
import React from 'react';
import { Container } from '@/components/container/container';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import BlankIcon from '@/images/home-page/icons/blank.svg';
import PortfolioIcon from '@/images/app-page/icons/portfolio.svg';
import { NoParking } from '@/components/noParking/noParking';
import { Claim } from '@/components/claim/claim';
import { CCTVAi } from '@/components/cctv/cctvAi';
import { AppDescription } from '@/components/appDescription/appDescription';
import { SeeHowItWorks } from '@/components/seeHowItWorks/seeHowItWorks';
import { WrongParkers } from '@/components/wrongParkers/wrongParkers';
import { ParkingManagement } from '@/app/[lang]/app/components/parkingManagement';

const Page = () => {
  return (
    <>
      <Container>
        <div className='mt-[80px]'>
          <DivideBanner
            title='Execute parking ticket on your business parkings now.'
            subtitle='On your business and private parkings you’re allowed to fine wrong parkers. Our app provides you with the infrastructure to execute parking fines with few clicks. Our app is fully automized and we take care of everything what happens after you create the fine'
            images={[BlankIcon, PortfolioIcon]}
          />
        </div>

        <div className='mt-[172px] max-md:mt-[100px]'>
          <NoParking onClick={() => {}} />
        </div>

        <section>
          <SeeHowItWorks />
          <AppDescription />
          <WrongParkers />
        </section>

        <div className='mb-[172px] mt-[20px]'>
          <Claim />
        </div>

        <div>
          <ParkingManagement />
        </div>

        <div className='my-[50px]'>
          <CCTVAi />
        </div>
      </Container>
    </>
  );
};

export default Page;
