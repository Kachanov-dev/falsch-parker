import React from 'react';
import { Container } from '@/components/container/container';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import EyeIcon from '@/images/global/icons/divideIcons/eye.svg';
import PhotoIcon from '@/images/global/icons/divideIcons/photo.svg';
import Towing from '@/images/global/icons/divideIcons/towing.svg';
import { HowItWorksSection } from '@/app/[lang]/home/components/sections/components/towingSections/howItWorksSection';
import { TrackTowingSection } from '@/app/[lang]/home/components/sections/components/towingSections/trackTowingSection';
import { Uber } from '@/components/uber/uber';

export const TowingSection = () => {
  return (
    <Container>
      <div className='my-[170px]'>
        <DivideBanner
          sectionTitles={['Towing']}
          title='Tow from business and private parkings now.'
          subtitle='We have 60 cars in our towing car pool and more than 12 towing companies are connected to our app.'
          images={[EyeIcon, PhotoIcon, Towing]}
        />
      </div>
      <Uber />
      <HowItWorksSection />
      <TrackTowingSection />
    </Container>
  );
};
