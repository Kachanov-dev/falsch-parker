import { defineField, defineType } from '@sanity/types';

export const Post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      title: 'Post title',
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Post unique identifier',
      name: 'slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
      },
    }),
    defineField({
      title: 'Post tag',
      name: 'tag',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Post synopsis',
      name: 'synopsis',
      type: 'string',
      time: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'post cover image',
      name: 'cover',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Time to read the post',
      name: 'time',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Post content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      options: {
        validation: (rule) => rule.required(),
      },
    }),
  ],
});
