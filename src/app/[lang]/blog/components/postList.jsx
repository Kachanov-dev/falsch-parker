import React from 'react';
import { PostCover } from '@/components/post/postCover';

const PostList = ({ posts, lang }) => {
  return (
    <div className='mt-10 grid grid-cols-2 gap-5'>
      {posts.map((post) => (
        <PostCover key={post.slug} {...post} lang={lang} />
      ))}
    </div>
  );
};

export { PostList };
