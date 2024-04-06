import React from 'react';
import { Container } from '@/components/container/container';
import { SaveSection } from '@/app/[lang]/home/components/sections/components/fuelFroundSections/saveSection';

const ContactPage = () => {
  return (
    <Container>
      <div className='my-20'>
        <SaveSection />
      </div>
    </Container>
  );
};

export default ContactPage;
