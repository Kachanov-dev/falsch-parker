import React from 'react';
import { Container } from '@/components/container/container';
import { FaqSection } from '@/app/[lang]/home/components/sections/faqSection';

const ContactPage = () => {
  return (
    <Container>
      <div className='my-20'>
        <FaqSection />
      </div>
    </Container>
  );
};

export default ContactPage;
