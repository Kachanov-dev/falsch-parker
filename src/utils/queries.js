const buildGetPostsQuery = (tag = '', offset = 0, limit = 6) => {
  const tagFilter = tag ? ` && tag == "${tag}"` : '';
  const limitFilter = `[${offset}...${offset + limit}]`;
  return `{
    "items": *[_type == "post"${tagFilter}]{_id, tag, title, synopsis, cover, time, slug, _createdAt}${limitFilter} | order(_createdAt desc),
    "total": count(*[_type == "post"${tagFilter}])
    }`;
};

const buildGetTagsQuery = () => {
  return 'array::unique(*[_type == "post"].tag)';
};

const buildGetAllSlugs = () => {
  return '*[_type == "post"]{slug}';
};

const buildGetPostDetails = (slug) => {
  return `*[_type == "post" && slug.current == "${slug}"]{_id, tag, title, synopsis, cover, time, slug, content, _createdAt}[0]`;
};

export {
  buildGetPostsQuery,
  buildGetTagsQuery,
  buildGetAllSlugs,
  buildGetPostDetails,
};
