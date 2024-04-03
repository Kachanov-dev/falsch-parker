import React from 'react';
import Image from 'next/image';
import { ArrowRight } from '@/components/icons/arrowRight';
import { Chip } from '@/components/chips/chip';
import { RoundButton } from '@/components/buttons/roundButton';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';

const PostCover = ({
  imageUrl,
  tag,
  time,
  title,
  synopsis,
  slug,
  lang,
  height = 730,
}) => {
  return (
    <div className='relative overflow-hidden'>
      <div
        className='relative w-full overflow-hidden rounded-[40px] text-white'
        style={{ height }}>
        <Image src={imageUrl} alt='banner' fill className='object-cover' />
        <div className='absolute bottom-0 flex h-[255px] w-full flex-col justify-between rounded-t-[40px] bg-dark/50 p-10 backdrop-blur-xl'>
          <div className='flex items-center justify-between'>
            <Chip small>{tag}</Chip>
            <span>{time} min read</span>
          </div>
          <span className='truncate text-4xl leading-normal'>{title}</span>
          <p className='line-clamp-2 pr-14 text-xl font-light opacity-50'>
            {synopsis}
          </p>
        </div>
      </div>
      <CornerButtonContainer>
        <RoundButton
          href={`/${lang}/blog/${slug}`}
          icon={ArrowRight}
          animation='group-hover:-rotate-45 group-hover:scale-125'
        />
      </CornerButtonContainer>
    </div>
  );
};

export { PostCover };
