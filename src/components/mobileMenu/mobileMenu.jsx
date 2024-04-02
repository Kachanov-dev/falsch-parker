import React, { useEffect } from 'react';
import Link from 'next/link';
import cl from 'classnames';
import { headerNavigation } from '@/utils/navigations';
import { usePathname } from 'next/navigation';
import { useClientTranslation } from '@/app/i18n/client';
import { PayFineButton } from '@/components/buttons/payFineButton';

export const MobileMenu = ({ isOpen, onClose, lang }) => {
  const pathname = usePathname();
  const { t } = useClientTranslation(lang, 'header');

  useEffect(() => {
    if (isOpen) {
      document.body.style.position = 'fixed';
    } else {
      document.body.style.position = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      className={`absolute left-0  z-[1100] flex h-full w-full items-center justify-center bg-opacity-75 transition-opacity duration-300`}
      style={{
        width: '100vw',
        height: '100vh',
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        top: isOpen ? '90%' : '0',
        transition: 'all 0.4s ease-in-out',
      }}>
      <div
        className='flex w-full max-w-md flex-col items-center gap-2 rounded-lg bg-[#F5F7F9] p-4'
        style={{
          width: '100vw',
          height: '100vh',
          top: '90%',
          transition: 'all 0.4s ease-in-out',
        }}>
        <ul className='flex flex-col gap-2'>
          {headerNavigation.map((item) => (
            <li key={item.name} className='flex flex-col gap-2'>
              <Link
                href={`/${lang}${item.href}`}
                onClick={onClose}
                className={cl(
                  ' p-0 text-base font-light text-[#0D0F11] duration-200 hover:text-[#28282880] w-fit',
                  pathname === `/${lang}${item.href}`
                    ? 'drop-shadow-[0_0.5px_0_#000]'
                    : ''
                )}>
                {t(item.name)}
              </Link>

              <div
                className='w-303 h-1 bg-gray-300 bg-opacity-10'
                style={{
                  width: '303px',
                  height: '1px',
                  background: 'rgba(13, 15, 17, 0.10)',
                }}
              />
            </li>
          ))}
        </ul>
        <PayFineButton text='Pay fine' width='303px' height='51px' />
      </div>
    </div>
  );
};

export default MobileMenu;
