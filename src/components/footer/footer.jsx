'use client';

import React from 'react';
import { SocialButton } from '@/components/buttons/socialButton';
import { Facebook } from '@/components/icons/facebook';
import { YouTube } from '@/components/icons/youtube';
import { Twitter } from '@/components/icons/twitter';
import { Instagram } from '@/components/icons/instagram';
import { FooterLink } from '@/components/footer/footerLink';
import Link from 'next/link';
import { AppButton } from '@/components/buttons/appButton';
import { Apple } from '@/components/icons/apple';
import { Android } from '@/components/icons/android';
import { ScrollToTopButton } from '@/components/buttons/scrollToTopButton';
import { ArrowDotButton } from '@/components/buttons/arrowDotButton';

import styles from './styles.module.scss';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div className='flex gap-24 max-lg:contents'>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-8'>
              <span className='text-6xl max-lg:text-4xl'>
                Increased <br /> illegal parking?
              </span>
              <span className='text-xl font-light opacity-50 max-lg:text-base'>
                We’re here to help you to solve the problem
              </span>
            </div>
            <ArrowDotButton theme='light'>Contact us</ArrowDotButton>
            <div className='contents max-lg:hidden'>
              <div className='flex flex-col gap-1'>
                <span className='text-xl font-light opacity-50'>
                  Or just give us a call.
                </span>
                <Link
                  href='tel:+41 44 123 45 67'
                  className='w-fit text-2xl transition duration-300 hover:opacity-50'>
                  +41 44 123 45 67
                </Link>
              </div>
              <div className='flex gap-2'>
                <SocialButton
                  href='https://www.facebook.com/'
                  icon={Facebook}
                />
                <SocialButton href='https://www.youtube.com/' icon={YouTube} />
                <SocialButton href='https://www.twitter.com/' icon={Twitter} />
                <SocialButton
                  href='https://www.instagram.com/'
                  icon={Instagram}
                />
              </div>
            </div>
          </div>
          <div className='flex-1 border'>
            <div className='grid flex-1 grid-flow-col grid-cols-[repeat(3,_auto)] grid-rows-[repeat(2,_min-content)] justify-between gap-x-10 gap-y-10 font-light max-xl:grid-cols-[repeat(2,_auto)] max-xl:grid-rows-[repeat(3,_min-content)] max-lg:hidden'>
              <div className='flex flex-col gap-2'>
                <span className='text-2xl'>Navigation</span>
                <FooterLink href='/'>Home</FooterLink>
                <FooterLink href='/'>App</FooterLink>
                <FooterLink href='/'>Blog</FooterLink>
                <FooterLink href='/'>Contact</FooterLink>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='text-2xl'>Our service</span>
                <FooterLink href='/'>Parking ticket</FooterLink>
                <FooterLink href='/'>Towing</FooterLink>
                <FooterLink href='/'>Fuel fraud</FooterLink>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='text-2xl'>About us</span>
                <FooterLink href='/'>FAQ</FooterLink>
                <FooterLink href='/'>Terms & Conditions</FooterLink>
                <FooterLink href='/'>Imprint</FooterLink>
                <FooterLink href='/'>Data protection</FooterLink>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='text-2xl'>Locations</span>
                <FooterLink href='/'>Towing service Zurich</FooterLink>
                <FooterLink href='/'>Towing service Bern</FooterLink>
                <FooterLink href='/'>Towing service Geneva</FooterLink>
                <FooterLink href='/'>Towing service Basel</FooterLink>
                <FooterLink href='/'>Towing service Lausanne</FooterLink>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='text-2xl'>Offices</span>
                <span className='text-xl opacity-50'>
                  Schützengasse 4<br />
                  8001 Zurich
                  <br />
                  Switzerland
                </span>
                <span className='text-xl opacity-50'>
                  Schützengasse 4<br />
                  8001 Zurich
                  <br />
                  Switzerland
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='mb-3 text-2xl'>Our app</span>
                <AppButton href='/' icon={Apple}>
                  App Store
                </AppButton>
                <AppButton href='/' icon={Android}>
                  Google Play
                </AppButton>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 items-center justify-between font-light max-lg:grid-cols-1 max-lg:flex-col max-lg:place-items-stretch max-lg:gap-2'>
          <div className='flex flex-col items-center gap-2 lg:hidden'>
            <AppButton icon={Apple} href='/'>
              App Store
            </AppButton>
            <AppButton icon={Android} href='/'>
              Google Play
            </AppButton>
          </div>
          <span className='text-sm opacity-50 max-lg:mt-4 max-lg:text-center max-lg:text-xs'>
            Copyright © 2024 | All rights reserved
          </span>
          <div className='justify-self-end max-lg:hidden'>
            <ScrollToTopButton onClick={scrollToTop} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
