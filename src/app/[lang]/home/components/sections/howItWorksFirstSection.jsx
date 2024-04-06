'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/container/container';
import { CornerToggleContainer } from '@/components/buttons/cornerToggleContainer';
import MobileParkingCar from '@/images/home-page/mobil-parking-car.png';
import { ArrowRightShapeButton } from '@/components/buttons/shapeButtons/arrowRightShapeButton';
import { CrossShapeButton } from '@/components/buttons/shapeButtons/crossShapeButton';
import { ArrowLeftShapeButton } from '@/components/buttons/shapeButtons/arrowLeftShapeButton';
import { SeeHowItWorks } from '@/components/seeHowItWorks/seeHowItWorks';
import { Claim } from '@/components/claim/claim';
import { AppDescription } from '@/components/appDescription/appDescription';

export const HowItWorksFirstSection = () => {
  return (
    <Container>
      <SeeHowItWorks />
      <AppDescription />
      <Claim />
    </Container>
  );
};
