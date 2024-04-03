import React from 'react';
import Link from 'next/link';
import cl from 'classnames';

const RoundButton = ({ icon, href, animation, onClick }) => {
  const Icon = icon;
  const Container = href ? Link : 'button';

  return (
    <Container
      onClick={onClick}
      href={href}
      className='group flex h-12 w-12 items-center justify-center rounded-full bg-dark outline-none'>
      <Icon
        className={cl(
          'text-light transition-transform duration-300',
          animation
        )}
      />
    </Container>
  );
};

export { RoundButton };
