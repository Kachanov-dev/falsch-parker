'use client';

import React, { useState, useEffect } from 'react';
import { RoundButton } from '@/components/buttons/roundButton';
import { SocialButton } from '@/components/buttons/socialButton';
import { Facebook } from '@/components/icons/facebook';
import { YouTube } from '@/components/icons/youtube';
import { Twitter } from '@/components/icons/twitter';
import { Instagram } from '@/components/icons/instagram';
import { ContactUs } from '@/components/buttons/contactUs';
import { FooterLink } from '@/components/footer/footerLink';
import Link from 'next/link';
import { AppButton } from '@/components/buttons/appButton';
import { Apple } from '@/components/icons/apple';
import { Android } from '@/components/icons/android';
import Image from 'next/image';
import FooterArrow from '@/images/global/footer-arrow.png';

const Footer = () => {
  const [isAccordion, setIsAccordion] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isServiceOpen, setServiceOpen] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isLocationsOpen, setLocationsOpen] = useState(false);
  const [isOfficesOpen, setOfficesOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setIsAccordion(true);
      } else {
        setIsAccordion(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='flex justify-center bg-dark px-10 py-20'>
      <div className='flex w-full max-w-container flex-col gap-[64px] text-white'>
        <div className='flex flex-wrap justify-between gap-24'>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-8'>
              <span className='text-6xl'>
                Increased <br /> illegal parking?
              </span>
              <span className='text-xl font-light opacity-50'>
                We’re here to help you to solve the problem
              </span>
            </div>
            <div className='hidden md:flex'>
              <ContactUs />
            </div>
            <div className='hidden flex-col gap-1 md:flex'>
              <span className='text-xl font-light opacity-50'>
                Or just give us a call.
              </span>
              <Link
                href='tel:+41 44 123 45 67'
                className='w-fit text-2xl transition duration-300 hover:opacity-50'>
                +41 44 123 45 67
              </Link>
            </div>
            <div className='hidden gap-2 md:flex'>
              <SocialButton href='https://www.facebook.com/' icon={Facebook} />
              <SocialButton href='https://www.youtube.com/' icon={YouTube} />
              <SocialButton href='https://www.twitter.com/' icon={Twitter} />
              <SocialButton
                href='https://www.instagram.com/'
                icon={Instagram}
              />
            </div>
          </div>
          <div
            className={`flex flex-1 flex-wrap justify-between font-light ${isAccordion ? 'flex-col' : 'flex-row'}`}>
            {isAccordion ? (
              <>
                <div className='mb-5 flex flex-col gap-2'>
                  <span
                    className='flex items-center justify-between border-b border-white border-opacity-10 pb-3 text-2xl'
                    onClick={() => setNavOpen(!isNavOpen)}>
                    Navigation
                    <Image
                      src={FooterArrow}
                      alt='arrow'
                      width={'auto'}
                      className='h-2'
                    />
                  </span>
                  {isNavOpen && (
                    <>
                      <FooterLink href='/'>Home</FooterLink>
                      <FooterLink href='/'>App</FooterLink>
                      <FooterLink href='/'>Blog</FooterLink>
                      <FooterLink href='/'>Contact</FooterLink>
                    </>
                  )}
                </div>
                <div className='mb-5 flex flex-col gap-2'>
                  <span
                    className='flex items-center justify-between border-b border-white border-opacity-10 pb-3 text-2xl'
                    onClick={() => setServiceOpen(!isServiceOpen)}>
                    Our service
                    <Image
                      src={FooterArrow}
                      alt='arrow'
                      width={'auto'}
                      className='h-2'
                    />
                  </span>
                  {isServiceOpen && (
                    <>
                      <FooterLink href='/'>Parking ticket</FooterLink>
                      <FooterLink href='/'>Towing</FooterLink>
                      <FooterLink href='/'>Fuel fraud</FooterLink>
                    </>
                  )}
                </div>

                <div className='mb-5 flex flex-col gap-2'>
                  <span
                    className='flex items-center justify-between border-b border-white border-opacity-10 pb-3 text-2xl'
                    onClick={() => setAboutOpen(!isAboutOpen)}>
                    About us
                    <Image
                      src={FooterArrow}
                      alt='arrow'
                      width={'auto'}
                      className='h-2'
                    />
                  </span>
                  {isAboutOpen && (
                    <>
                      <FooterLink href='/'>FAQ</FooterLink>
                      <FooterLink href='/'>Terms & Conditions</FooterLink>
                      <FooterLink href='/'>Imprint</FooterLink>
                      <FooterLink href='/'>Data protection</FooterLink>
                    </>
                  )}
                </div>
                <div className='mb-5 flex flex-col gap-2'>
                  <span
                    className='flex items-center justify-between border-b border-white border-opacity-10 pb-3 text-2xl'
                    onClick={() => setLocationsOpen(!isLocationsOpen)}>
                    Locations
                    <Image
                      src={FooterArrow}
                      alt='arrow'
                      width={'auto'}
                      className='h-2'
                    />
                  </span>
                  {isLocationsOpen && (
                    <>
                      <FooterLink href='/'>Towing service Zurich</FooterLink>
                      <FooterLink href='/'>Towing service Bern</FooterLink>
                      <FooterLink href='/'>Towing service Geneva</FooterLink>
                      <FooterLink href='/'>Towing service Basel</FooterLink>
                      <FooterLink href='/'>Towing service Lausanne</FooterLink>
                    </>
                  )}
                </div>

                <div className='mb-5 flex flex-col gap-2'>
                  <span
                    className='flex items-center justify-between border-b border-white border-opacity-10 pb-3 text-2xl'
                    onClick={() => setOfficesOpen(!isOfficesOpen)}>
                    Offices
                    <Image
                      src={FooterArrow}
                      alt='arrow'
                      width={'auto'}
                      className='h-2'
                    />
                  </span>
                  {isOfficesOpen && (
                    <>
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
                    </>
                  )}
                </div>
                <div className='mb-2 flex flex-row flex-wrap justify-center gap-2'>
                  <AppButton href='/' icon={Apple}>
                    App Store
                  </AppButton>
                  <AppButton href='/' icon={Android}>
                    Google Play
                  </AppButton>
                </div>
                <div className='flex justify-center md:hidden'>
                  <ContactUs widthMobile={true} />
                </div>
              </>
            ) : (
              <>
                <div className='flex flex-col gap-10'>
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
                </div>
                <div className='flex flex-col gap-10'>
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
                </div>
                <div className='flex flex-col gap-10'>
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
              </>
            )}
          </div>
        </div>
        <div className='flex items-center justify-between font-light'>
          <span className='text-sm opacity-50'>
            Copyright © 2024 | All rights reserved
          </span>
          <RoundButton onClick={scrollToTop} />
        </div>
      </div>
    </div>
  );
};

export { Footer };
