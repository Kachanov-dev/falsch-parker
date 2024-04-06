import React from 'react';
import { Container } from '@/components/container/container';
import { SaveSection } from '@/app/[lang]/home/components/sections/components/fuelFroundSections/saveSection';
import { WrongParkers } from '@/components/wrongParkers/wrongParkers';

const ContactPage = () => {
  return (
    <Container>
      <div className='my-20'>
        <WrongParkers />
      </div>
    </Container>
  );
};

export default ContactPage;
