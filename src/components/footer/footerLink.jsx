import React from 'react';
import NextLink from 'next/link';

const FooterLink = ({ href, children }) => {
  return (
    <NextLink
      href={href}
      className='whitespace-nowrap text-xl font-light opacity-50 transition-opacity duration-300 hover:opacity-30'>
      {children}
    </NextLink>
  );
};

export { FooterLink };
