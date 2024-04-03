import React from 'react';
import Link from 'next/link';

const AppButton = ({ href, icon, children }) => {
  const Icon = icon;
  return (
    <Link
      href={href}
      className='group flex h-[51px] w-[167px] items-center gap-3 rounded-full border border-white bg-dark px-5 transition-colors duration-300 hover:bg-light hover:text-black'>
      <Icon className='' />
      <span>{children}</span>
    </Link>
  );
};

export { AppButton };
