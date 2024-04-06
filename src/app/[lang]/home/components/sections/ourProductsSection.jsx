import React from 'react';
import { Container } from '@/components/container/container';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';
import { ProductCard } from '@/components/cards/productCard';

export const OurProductsSection = React.forwardRef((props, ref) => {
  return (
    <Container>
      <div ref={ref} />
      <div className='pb-9'>
        <SectionTitle title='Our products' />
      </div>
      <div className='no-scrollbar relative w-full overflow-x-scroll'>
        <div className='flex w-fit gap-3'>
          <ProductCard
            type='fuelFraud'
            className='bg-[#6A797F]'
            title='Parking fines.'
            subtitle='Legally issue a parking fine on private property. For individuals and companies.'
          />
          <ProductCard
            type='parkingFines'
            className='bg-[#111E28]'
            title='Request a tow truck.'
            subtitle='Largest tow service provider pool with a maximum waiting time of 17 minutes.'
          />
          <ProductCard
            type='requestTruck'
            className='bg-[#353D4B]'
            title='Fuel fraud.'
            subtitle='Our app requires only 2 minutes of processing time.'
          />
        </div>
      </div>
    </Container>
  );
});
