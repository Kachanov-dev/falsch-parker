import React from 'react';
import { Container } from '@/components/container/container';
import { FaqSection } from '@/components/faq/faqSection';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import EyeIcon from '@/images/global/icons/divideIcons/eye.svg';
import PhotoIcon from '@/images/global/icons/divideIcons/photo.svg';
import TowingIcon from '@/images/global/icons/divideIcons/towing.svg';
import { Uber } from '@/components/uber/uber';

const TowingPage = () => {
  return (
    <Container>
      <div className='mt-[170px]'>
        <DivideBanner
          title='Tow from business and private parkings now.'
          subtitle='You’re allowed to tow wrong parkers on your private parking.'
          images={[EyeIcon, PhotoIcon, TowingIcon]}
        />
      </div>

      <div className='mt-[170px] max-md:mt-[100px]'>
        <Uber />
      </div>

      <FaqSection />
    </Container>
  );
};

export default TowingPage;
