import React from 'react';
import { client } from '@/sanity/client';
import { buildGetAllSlugs, buildGetPostDetails } from '@/utils/queries';
import { Container } from '@/components/container/container';
import { Heading } from '@/app/[lang]/blog/[slug]/heading';
import { Post } from '@/models/post';
import { PortableText } from '@portabletext/react';

export const generateStaticParams = async () => {
  const slugObjs = await client.fetch(buildGetAllSlugs());
  return slugObjs.map((slugObj) => ({ slug: slugObj.current }));
};

const Page = async ({ params: { slug, lang } }) => {
  const post = await client
    .fetch(buildGetPostDetails(slug), {}, { next: { revalidate: 30 } })
    .then((response) => new Post(response));
  return (
    <Container>
      <div className='mb-20 mt-4 flex flex-col gap-20'>
        <Heading post={post} lang={lang} />
        <div className=''>
          <PortableText value={post.content} />
        </div>
      </div>
    </Container>
  );
};

export default Page;
