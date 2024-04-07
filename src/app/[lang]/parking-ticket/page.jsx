import React from 'react';
import { Container } from '@/components/container/container';
import { FaqSection } from '@/components/faq/faqSection';
import { LargeImageWithDesc } from '@/components/largeImageWithDesc/largeImageWithDesc';
import CancelOrder from '@/images/app-page/cancel-order.png';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import BlankIcon from '@/images/global/icons/divideIcons/blank.svg';
import PortfolioIcon from '@/images/app-page/icons/portfolio.svg';
import { NoParking } from '@/components/noParking/noParking';
import { SeeHowItWorks } from '@/components/seeHowItWorks/seeHowItWorks';
import { AppDescription } from '@/components/appDescription/appDescription';
import { WrongParkers } from '@/components/wrongParkers/wrongParkers';
import { Claim } from '@/components/claim/claim';
import { ParkingManagement } from '@/app/[lang]/parking-ticket/components/parkingManagement';
import { ParkingCards } from '@/app/[lang]/parking-ticket/components/parkingCards';
import { CCTVAi } from '@/components/cctv/cctvAi';

const ParkingTicketPage = () => {
  return (
    <Container>
      <LargeImageWithDesc
        image={CancelOrder}
        mobileClassesImg='ml-[15%] mt-[10%] object-contain max-md:ml-[10%] max-md:mt-[5%]'
        desktopClassesImg='ml-[15%] mt-[10%] object-contain max-md:ml-[18%] max-md:mt-[5%]'
        descDesktop={
          <div className='flex flex-col justify-between py-5 text-7xl leading-tight	text-dark'>
            Easy delete{' '}
            <span className='text-dark/50'>any parking ticket over app.</span>
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

      <div className='mt-[80px]'>
        <DivideBanner
          title='Execute parking ticket on your business parkings now.'
          subtitle='On your business and private parkings you’re allowed to fine wrong parkers. Our app provides you with the infrastructure to execute parking fines with few clicks. Our app is fully automized and we take care of everything what happens after you create the fine'
          images={[BlankIcon, PortfolioIcon]}
        />
      </div>

      <div className='mt-[172px] max-md:mt-[100px]'>
        <NoParking />
      </div>

      <section>
        <SeeHowItWorks />
        <AppDescription />
        <WrongParkers />
      </section>

      <div className='mt-[20px] max-md:mb-[100px] md:mb-[172px]'>
        <Claim />
      </div>

      <ParkingManagement />

      <div className='my-5 md:my-[150px]'>
        <ParkingCards />
      </div>

      <CCTVAi />

      <FaqSection />
    </Container>
  );
};

export default ParkingTicketPage;
