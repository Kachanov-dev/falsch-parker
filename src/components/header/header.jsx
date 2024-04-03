'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cl from 'classnames';
import { usePathname } from 'next/navigation';
import { useClientTranslation } from '@/app/i18n/client';
import { headerNavigation } from '@/utils/navigations';
import logo from '@/images/home-page/logo.png';
import { Container } from '@/components/container/container';
import { PayFineButton } from '@/components/buttons/payFineButton';
import MobileMenu from '@/components/mobileMenu/mobileMenu';
import ArrowDown from '@/images/global/icons/arrowDown.svg';
import { Phone } from '@/components/icons/Phone';

const Header = ({ lang }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useClientTranslation(lang, 'header');
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div
        className={`fixed top-0 z-[1000] flex h-[75px] w-full bg-[#F5F7F9] duration-300  max-lg:backdrop-blur-none lg:bg-[#F5F7F9]/80 lg:backdrop-blur-xl`}>
        <Container>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <Image
                src={logo}
                width={100}
                height={40}
                alt='Falsch-parker logo'
              />
            </div>
            <div className='flex w-full items-center justify-center max-lg:hidden'>
              <ul className='flex w-full max-w-[650px] justify-between'>
                {headerNavigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={`/${lang}${item.href}`}
                      className={cl(
                        'p-2 text-base font-light text-[#0D0F11] duration-200 hover:text-[#28282880]',
                        pathname === `/${lang}${item.href}`
                          ? 'drop-shadow-[0_0.5px_0_#000]'
                          : ''
                      )}>
                      {t(item.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='max-lg:block lg:hidden'>
              <div className='flex flex-row items-center'>
                <button onClick={toggleMobileMenu} className='mr-3 p-2'>
                  <Image
                    src={ArrowDown}
                    alt='Arrow Header'
                    className='duration-200'
                    style={{
                      transform: `rotate(${isMobileMenuOpen ? '180deg' : '0deg'})`,
                    }}
                  />
                </button>
                <button className='flex h-[35px] w-[35px] items-center justify-center gap-2 rounded-full bg-[#05D54B] p-2'>
                  <Phone className={'text-white'} />
                </button>
              </div>
            </div>
            <div className='max-lg:hidden lg:block'>
              <PayFineButton text='Pay fine' />
            </div>
          </div>
        </Container>
      </div>
      <div className='max-lg:block lg:hidden'>
        <MobileMenu
          onClose={toggleMobileMenu}
          lang={lang}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </div>
    </header>
  );
};

export default Header;
