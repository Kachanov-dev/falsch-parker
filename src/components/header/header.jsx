'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '../mobileMenu/mobileMenu';
import { headerNavigation } from '@/utils/navigations';
import logo from '@/images/home-page/logo.png';
import ArrowHeader from '@/images/app-page/icons/arrowHeader.svg';
import CallPhone from '@/images/app-page/icons/callPhone.svg';
import { Container } from '@/components/container/container';
import { PayFineButton } from '@/components/buttons/payFineButton';
import { usePathname } from 'next/navigation';
import cl from 'classnames';
import { useClientTranslation } from '@/app/i18n/client';

const Header = ({ lang }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useClientTranslation(lang, 'header');
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  console.log(isMobileMenuOpen);

  const IsMobile = window.innerWidth <= 800;

  return (
    <header
      className={`fixed top-0 z-[1000] flex h-[75px]   bg-[#F5F7F9]/80  backdrop-blur-xl duration-300 ${IsMobile ? 'w-[375px]' : 'w-full'} `}>
      <Container>
        <div className={`flex ${IsMobile ? 'justify-between' : ''}`}>
          <div className='flex items-center'>
            <Image
              src={logo}
              width={100}
              height={40}
              alt='Falsch-parker logo'
            />
          </div>

          <div className='flex w-full items-center justify-center max-[950px]:hidden'>
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

          {!IsMobile && <PayFineButton text='Pay fine' />}

          <div
            className={`flex items-center gap-4 ${IsMobile ? '' : 'hidden'}`}>
            <button onClick={toggleMobileMenu}>
              <Image
                src={ArrowHeader}
                alt='ArrowHeader'
                style={{
                  transform: isMobileMenuOpen
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)',
                  transition: 'transform 0.4s ease-in-out',
                }}
              />
            </button>
            <button className='flex items-center justify-center gap-2 rounded-full bg-[#05D54B] p-2'>
              <Image src={CallPhone} alt='CallPhone' />
            </button>
          </div>
        </div>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={toggleMobileMenu}
          lang={lang}
        />
      </Container>
    </header>
  );
};

export default Header;
