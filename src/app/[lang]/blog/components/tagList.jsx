import React from 'react';
import { buildBlogPagingHref } from '@/utils/utils';
import { Chip } from '@/components/chips/chip';

const TagList = ({ tags, activeTag }) => {
  return (
    <div className='flex gap-2'>
      <Chip
        dark
        key='all'
        active={!activeTag}
        href={activeTag ? buildBlogPagingHref(1) : ''}>
        All
      </Chip>
      {tags.map((tag) => (
        <Chip
          dark
          key={tag}
          active={tag === activeTag}
          href={tag !== activeTag ? buildBlogPagingHref(1, tag) : ''}>
          {tag}
        </Chip>
      ))}
    </div>
  );
};

export { TagList };
