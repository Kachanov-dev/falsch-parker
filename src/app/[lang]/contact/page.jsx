import React from 'react';
import { HowItWorksSection } from '@/app/[lang]/home/components/sections/components/fuelFroundSections/howItWorksSection';
import { Container } from '@/components/container/container';

const ContactPage = () => {
  return (
    <Container>
      <div className='my-20'>
        <HowItWorksSection />
      </div>
    </Container>
  );
};

export default ContactPage;
