import React from 'react';
import { Container } from '@/components/container/container';
import { FaqSection } from '@/components/faq/faqSection';
import { FullControl } from '@/components/fullControl/fullControl';
import FullControlTowing from '@/images/full-control/towing.png';
import FullControlTowingMobile from '@/images/full-control/towing-mobile.png';
import FullControlFraud from '@/images/full-control/fuel-fraud.png';
import FullControlFraudMobile from '@/images/full-control/fuel-fraud-mobile.png';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import EyeIcon from '@/images/global/icons/divideIcons/eye.svg';
import PhotoIcon from '@/images/global/icons/divideIcons/photo.svg';
import TowingIcon from '@/images/global/icons/divideIcons/towing.svg';
import { Uber } from '@/components/uber/uber';

const TowingPage = () => {
  return (
    <Container>
      <div className='grid gap-4'>
        <DivideBanner
          title='Tow from business and private parkings now.'
          subtitle='You’re allowed to tow wrong parkers on your private parking.'
          images={[EyeIcon, PhotoIcon, TowingIcon]}
        />
      </div>

      <div className='mt-[170px] max-md:mt-[100px]'>
        <Uber />
      </div>
        <FullControl
          smallCover={FullControlTowingMobile}
          cover={FullControlTowing}
          subtitle='Over the app and dashboard you can
        order nearest Towing car free of charge. And
        you can see all details in real time.'
        />
        <FullControl
          smallCover={FullControlFraudMobile}
          cover={FullControlFraud}
          subtitle='In the dashboard, you can view payment
        statuses and have the option to delete any report
        if a previously unpaid customer returns and pays on the spot.
        Additionally, you can print out any report as needed.'
        />
      </div>
      <FaqSection />
    </Container>
  );
};

export default TowingPage;
