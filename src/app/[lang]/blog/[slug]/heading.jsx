import React from 'react';
import { PostCover } from '@/components/post/postCover';
import { Chip } from '@/components/chips/chip';

const Heading = ({ post, lang }) => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center gap-3'>
        <Chip small href={`/${lang}/blog`} dark>
          Blog
        </Chip>
        <span className='opacity-50'>/</span>
        <Chip small dark active>
          {post.title}
        </Chip>
      </div>
      <div>
        <PostCover {...post} height={700} lang={lang} />
      </div>
    </div>
  );
};

export { Heading };
